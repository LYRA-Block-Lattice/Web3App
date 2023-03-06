import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import SecondaryButton from "../components/SecondaryButton";
import "./MintFiatDialog.css";
import { LongRunTask, NeedRunTask } from "../app/utils";
import { useDispatch, useSelector } from "react-redux";
import { getAppSelector } from "../app/selectors";
import PrimaryButton from "./PrimaryButton";
import { IBalance } from "../app/wallet/walletReducer";
import { getWallet } from "../app/wallet/walletSaga";
import { BlockchainAPI } from "../app/blockchain";
import { ReceiveTransferBlock } from "../app/blockchain/blocks/block";
import { FindTokenList } from "../app/blockchain/blockchain-api";

const MintFiatDialog: FunctionComponent<NeedRunTask> = (props) => {
  const app = useSelector(getAppSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [supply, setSupply] = useState<number>(0);
  const [options, setOptions] = useState<FindTokenList>([]);

  function getTokens() {
    BlockchainAPI.findTokens("", "fiat")
      .then((ret) => {
        setOptions(ret);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  useEffect(() => {
    getTokens();
  }, []);

  const onMintClick = useCallback(() => {
    console.log("printing fiat...");
    const promises: LongRunTask[] = [
      {
        promise: (input) =>
          new Promise(async (resolve, reject) => {
            // find it
            try {
              const wallet = getWallet();

              const findRet = await BlockchainAPI.findFiatWallet(
                input.accountId,
                input.ticker
              );
              if (findRet.resultCode != 0) {
                // not exists. create it
                const createRet = await wallet.createFiatWalletAsync(
                  input.ticker
                );
                if (createRet.resultCode != 0) {
                  reject(
                    "Unable to create Fiat wallet: " + createRet.resultMessage
                  );
                }
              }

              const balanceResp = await wallet.printFiat(
                input.ticker,
                input.amount
              );
              if (balanceResp.resultCode == 0) {
                resolve({ ...input, balanceResp: balanceResp });
              } else {
                reject(balanceResp.resultMessage);
              }
            } catch (e) {
              reject(e);
            }
          }),
        callback: null,
        name: "Create Fiat wallet if not exist",
        description: "Send block to Lyra consensus network."
      },
      {
        promise: (input) =>
          new Promise(async (resolve, reject) => {
            const wallet = getWallet();

            const balanceResp = await wallet.printFiat(
              input.ticker,
              input.amount
            );
            if (balanceResp.resultCode == 0) {
              resolve({ ...input, balanceResp: balanceResp });
            } else {
              reject(balanceResp.resultMessage);
            }
          }),
        callback: null,
        name: "Mint Fiat",
        description: "Send block to Lyra consensus network."
      },
      {
        promise: (input) =>
          new Promise((resolve, reject) => {
            console.log("tx hash is: ", input.balanceResp.txHash);
            let timeElapsed = 0;
            const intervalId = setInterval(() => {
              timeElapsed += 5;
              if (timeElapsed >= 15) {
                clearInterval(intervalId);
                reject(new Error("Check result timeout."));
              }

              BlockchainAPI.getBlockBySourceHash(input.balanceResp.txHash)
                .then((resp) => {
                  if (resp.resultCode == 0) {
                    const recvBlock = resp.getBlock() as ReceiveTransferBlock;
                    console.log("get block by source hash", recvBlock);
                    // parse this Tags: {"managed":"RefundReceive","auth":"AccountDoesNotExist"}
                    if (
                      recvBlock.Tags &&
                      recvBlock.Tags["managed"] == "RefundReceive"
                    ) {
                      reject(recvBlock.Tags["auth"]);
                    } else if (
                      recvBlock.Tags &&
                      recvBlock.Tags["managed"] == "NormalReceive"
                    ) {
                      clearInterval(intervalId);
                      resolve(recvBlock.Tags["auth"]);
                    }
                  }
                })
                .catch((err) => {
                  console.log("get block by source hash error", err);
                });
            }, 5000);
          }),
        callback: null,
        name: "Check Mint Result",
        description: "Check Mint Result"
      }
    ];
    if (props.onStart) {
      const ret = props.onStart(
        "Print Fiat",
        {
          ticker: name,
          amount: supply
        },
        promises
      );
      console.log(ret);
    }
    // dispatch({
    //   type: WALLET_PRINT_FIAT,
    //   payload: {
    //     accountId: app.wallet.accountId,
    //     ticker: name,
    //     amount: supply
    //   }
    // });
  }, [name, supply]);

  const onGetTokenInputChange = useCallback(
    (event: any, value: any, reason: any) => {
      if (value) {
        setName(value);
      } else {
        setName("");
      }
    },
    [options]
  );
  return (
    <div className="mintfiatdialog">
      <div className="print-fiat-for1">Print Fiat for free</div>
      <Autocomplete
        sx={{ width: 301 }}
        disablePortal
        options={options}
        onInputChange={onGetTokenInputChange}
        getOptionLabel={(option) => option.token}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Select Fiat Type"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        size="medium"
      />
      <TextField
        className="domain-name2"
        sx={{ width: 301 }}
        color="primary"
        variant="outlined"
        type="number"
        label="Amount to print"
        placeholder="100"
        size="medium"
        margin="none"
        onChange={(e) => setSupply(+e.target.value)}
      />
      <SecondaryButton onClick={onMintClick}>Print</SecondaryButton>
    </div>
  );
};

export default MintFiatDialog;

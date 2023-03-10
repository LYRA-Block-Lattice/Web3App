import {
  FunctionComponent,
  useState,
  useCallback,
  useRef,
  LegacyRef
} from "react";
import SelectTokenCatalogButton from "../components/SelectTokenCatalogButton";
import "./CatalogSelection.css";

type CatalogSelectionType = {
  sellText?: string;
  cat?: string;
  tokenActionClicked?: (
    action: string | undefined,
    tokenName: string | undefined,
    xref: LegacyRef<HTMLButtonElement> | undefined
  ) => void;
};

const CatalogSelection: FunctionComponent<CatalogSelectionType> = ({
  sellText,
  cat,
  tokenActionClicked
}) => {
  const [buttons, setButtons] = useState<
    {
      xref: LegacyRef<HTMLButtonElement> | undefined;
      tokenName: string;
      disabled: boolean;
      icon: string;
    }[]
  >([
    {
      xref: useRef(null),
      tokenName: "Token",
      disabled: false,
      icon: "../asserts/icbaselinegeneratingtokens.svg"
    },
    {
      xref: useRef(null),
      tokenName: "NFT",
      disabled: false,
      icon: "../asserts/mapartgallery.svg"
    },
    {
      xref: useRef(null),
      tokenName: "Fiat",
      disabled: false,
      icon: "../asserts/fluentemojihighcontrastdollarbanknote.svg"
    },
    {
      xref: useRef(null),
      tokenName: "Goods",
      disabled: false,
      icon: "../asserts/mditruckdelivery.svg"
    },
    {
      xref: useRef(null),
      tokenName: "Service",
      disabled: false,
      icon: "../asserts/carbonuserservicedesk.svg"
    }
  ]);

  const traceToken = useCallback(
    (action: string | undefined, tokenName: string | undefined) => {
      let ele = buttons.find((a) => a.tokenName === tokenName);
      setButtons((prev) => {
        if (ele?.disabled) {
          ele.disabled = false;
        }
        prev
          .filter((a) => a.tokenName != tokenName)
          .map((a) => (a.disabled = true));
        return [...prev];
      });
      if (tokenActionClicked) tokenActionClicked(action, tokenName, ele?.xref);
    },
    [tokenActionClicked, buttons]
  );

  return (
    <div className="catalogselection">
      <div className="i-want-to">I want to {sellText}</div>
      <div className="tradecatalog">
        {buttons.map((a, index) => (
          <SelectTokenCatalogButton
            key={a.tokenName}
            xref={a.xref}
            imgurl={a.icon}
            cat={a.tokenName}
            tokenClicked={(e) => traceToken(sellText, e)}
            disabled={a.disabled}
            act={sellText}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogSelection;

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAuthSelector } from "../app/selectors";
import CatalogSelection from "../components/CatalogSelection";
import PrimaryButton from "../components/PrimaryButton";
import PageTemplate from "../pages/PageTemplate";

export const StartMint = () => {
  const navigate = useNavigate();
  const auth = useSelector(getAuthSelector);
  const [cat, setCat] = useState<string | undefined>(undefined);

  return (
    <PageTemplate title="What to mint">
      <CatalogSelection
        sellText="mint"
        key="mint-x"
        tokenActionClicked={(act, token, xref) => setCat(token)}
      />
      <PrimaryButton
        key="mint-y"
        disabled={cat === undefined}
        onClick={() =>
          auth.hasKey
            ? navigate(`/mint-${cat?.toLowerCase()}`)
            : navigate("/openwallet")
        }
      >
        Start to Mint {cat}
      </PrimaryButton>
    </PageTemplate>
  );
};

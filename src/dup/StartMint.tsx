import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import CatalogSelection from "../components/CatalogSelection";
import PrimaryButton from "../components/PrimaryButton";
import PageTemplate from "../pages/PageTemplate";

export const StartMint = () => {
  const navigate = useNavigate();
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
        onClick={() => navigate(`/mint-${cat?.toLowerCase()}`)}
      >
        Start to Mint {cat}
      </PrimaryButton>
    </PageTemplate>
  );
};

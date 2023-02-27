import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import CatalogSelection from "../components/CatalogSelection";
import PrimaryButton from "../components/PrimaryButton";
import PageTemplate from "../pages/PageTemplate";

export const StartMint = () => {
  const navigate = useNavigate();
  const [cat, setCat] = useState<string | undefined>(undefined);

  return (
    <PageTemplate
      children={[
        <CatalogSelection
          sellText="mint"
          tokenActionClicked={(act, token, xref) => setCat(token)}
        />,
        <PrimaryButton
          disabled={cat === undefined}
          onClick={() => navigate(`/mint-${cat?.toLowerCase()}`)}
        >
          Start to Mint {cat}
        </PrimaryButton>
      ]}
      title="What to mint"
    />
  );
};

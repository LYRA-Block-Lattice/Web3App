import { Routes, Route, useNavigate } from "react-router-dom";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import Market from "./pages/Market";
import ScanToPay from "./pages/ScanToPay";
import PageTemplate from "./pages/PageTemplate";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import SellFlow from "./pages/SellFlow";
import MiscComponents from "./pages/MiscComponents";
import SendTokenForm from "./pages/SendTokenForm";
import WalletHome from "./pages/WalletHome";
import AssertDetailView from "./pages/AssertDetailView";
import SellTokenToToken from "./pages/SellTokenToToken";
import ViewTradesForm from "./pages/ViewTradesForm";
import ViewOrdersForm from "./pages/ViewOrdersForm";
import CreateOrderSuccessForm from "./pages/CreateOrderSuccessForm";
import StartToCreateOrder from "./pages/StartToCreateOrder";
import CreateWallet from "./pages/CreateWallet";
import OpenWallet from "./pages/OpenWallet";
import MintFiatToken from "./pages/MintFiatToken";
import CreateTokenForm from "./pages/CreateTokenForm";
import CreateTOTForm from "./pages/CreateTOTForm";
import CreateNFTForm from "./pages/CreateNFTForm";
import { useEffect } from "react";
import { getRouterSelector } from "./app/selectors";
import MintFiatDialog from "./components/MintFiatDialog";
import CreateTokenDialog from "./components/CreateTokenDialog";
import CreateNFTDialog from "./components/CreateNFTDialog";
import CreateTOTDialog from "./components/CreateTOTDialog";
import CatalogSelection from "./components/CatalogSelection";
import PrimaryButton from "./components/PrimaryButton";
import { StartMint } from "./dup/StartMint";
import MinterToken from "./dup/MinterToken";
import SellFlowWithPopup from "./dup/SellFlowWithPopup";
import BackupPrivateKey from "./dup/BackupPrivateKey";

function App() {
  const router = useSelector(getRouterSelector);
  const action = router.action;
  const location = router.location;
  const pathname = location!.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/scantopay":
        title = "";
        metaDescription = "";
        break;
      case "/pagetemplate":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/userprofile":
        title = "";
        metaDescription = "";
        break;
      case "/sellflow":
        title = "";
        metaDescription = "";
        break;
      case "/misccomponents":
        title = "";
        metaDescription = "";
        break;
      case "/sendtokenform":
        title = "";
        metaDescription = "";
        break;
      case "/wallethome":
        title = "";
        metaDescription = "";
        break;
      case "/assertdetailview":
        title = "";
        metaDescription = "";
        break;
      case "/selltokentotoken":
        title = "";
        metaDescription = "";
        break;
      case "/viewtradesform":
        title = "";
        metaDescription = "";
        break;
      case "/viewordersform":
        title = "";
        metaDescription = "";
        break;
      case "/createordersuccessform":
        title = "";
        metaDescription = "";
        break;
      case "/starttocreateorder":
        title = "";
        metaDescription = "";
        break;
      case "/createwallet":
        title = "";
        metaDescription = "";
        break;
      case "/openwallet":
        title = "";
        metaDescription = "";
        break;
      case "/mint-fiat-token":
        title = "";
        metaDescription = "";
        break;
      case "/createtokenform":
        title = "";
        metaDescription = "";
        break;
      case "/createtotform":
        title = "";
        metaDescription = "";
        break;
      case "/createnftform":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Market />} />

      <Route path="/scantopay" element={<ScanToPay />} />

      <Route path="/pagetemplate" element={<PageTemplate />} />

      <Route path="/about" element={<About />} />

      <Route path="/userprofile" element={<UserProfile />} />

      <Route path="/sellflow" element={<SellFlow />} />

      <Route path="/misccomponents" element={<MiscComponents />} />

      <Route path="/sendtokenform" element={<SendTokenForm />} />

      <Route path="/wallethome" element={<WalletHome />} />

      <Route path="/wallethome" element={<WalletHome />} />

      <Route path="/assertdetailview" element={<AssertDetailView />} />

      <Route path="/selltokentotoken" element={<SellTokenToToken />} />

      <Route path="/viewtradesform" element={<ViewTradesForm />} />

      <Route path="/viewordersform" element={<ViewOrdersForm />} />

      <Route
        path="/createordersuccessform"
        element={<CreateOrderSuccessForm />}
      />

      <Route path="/starttocreateorder" element={<StartToCreateOrder />} />

      <Route path="/createwallet" element={<CreateWallet />} />

      <Route path="/openwallet" element={<OpenWallet />} />

      <Route path="/mint-token" element={<MinterToken cat="Token" />} />
      <Route path="/mint-nft" element={<MinterToken cat="NFT" />} />
      <Route path="/mint-fiat" element={<MinterToken cat="Fiat" />} />
      <Route path="/mint-goods" element={<MinterToken cat="Goods" />} />
      <Route path="/mint-service" element={<MinterToken cat="Service" />} />
      <Route path="/mint" element={<StartMint />} />
      <Route path="/sellflow2" element={<SellFlowWithPopup />} />

      <Route path="/createtokenform" element={<CreateTokenForm />} />

      <Route path="/createtotform" element={<CreateTOTForm />} />

      <Route path="/createnftform" element={<CreateNFTForm />} />
      <Route
        path="/backuptofile"
        element={
          <PageTemplate title="Backup Wallet">
            <BackupPrivateKey />
          </PageTemplate>
        }
      />
    </Routes>
  );
}
export default App;

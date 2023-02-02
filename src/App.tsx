import { Routes, Route } from "react-router-dom";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import Market from "./pages/Market";

import WalletHome from "./pages/WalletHome";
import SendTokenForm from "./pages/SendTokenForm";
import AssertDetailView from "./pages/AssertDetailView";
import MintFiatToken from "./pages/MintFiatToken";
import CreateTokenForm from "./pages/CreateTokenForm";
import CreateTOTForm from "./pages/CreateTOTForm";
import SellTokenToToken from "./pages/SellTokenToToken";
import ViewTradesForm from "./pages/ViewTradesForm";
import ViewOrdersForm from "./pages/ViewOrdersForm";
import CreateOrderSuccessForm from "./pages/CreateOrderSuccessForm";
import PreviewSellOrderForm from "./pages/PreviewSellOrderForm";
import CreateNFTForm from "./pages/CreateNFTForm";
import StartToCreateOrder from "./pages/StartToCreateOrder";
import Redir from "./pages/Redir";
import CreateWallet from "./pages/CreateWallet";
import OpenWallet from "./pages/OpenWallet";
import ScanToPay from "./pages/ScanToPay";
import SellTokenToTOT from "./pages/SellTokenToTOT";
import SellTOTToTOT from "./pages/SellTOTToTOT";
import SellTOTToToken from "./pages/SellTOTToToken";
import Empty from "./pages/Empty";
import TransactionHistory from "./pages/TransactionHistory";
import OldV1UI from "./pages/OldV1UI";
import About from "./pages/About";
import { useEffect } from "react";
import { getRouterSelector } from "./app/selectors";

function App() {
  const router = useSelector(getRouterSelector);
  const action = router.action;
  const location = router.location;
  const pathname = location!.pathname;

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
      case "/wallethome":
        title = "";
        metaDescription = "";
        break;
      case "/sendtokenform":
        title = "";
        metaDescription = "";
        break;
      case "/assertdetailview":
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
      case "/previewsellorderform":
        title = "";
        metaDescription = "";
        break;
      case "/createnftform":
        title = "";
        metaDescription = "";
        break;
      case "/starttocreateorder":
        title = "";
        metaDescription = "";
        break;
      case "/redir":
        title = "";
        metaDescription = "";
        break;
      case "/create-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/openwallet":
        title = "";
        metaDescription = "";
        break;
      case "/scantopay":
        title = "";
        metaDescription = "";
        break;
      case "/selltokentotot":
        title = "";
        metaDescription = "";
        break;
      case "/selltottotot":
        title = "";
        metaDescription = "";
        break;
      case "/selltottotoken":
        title = "";
        metaDescription = "";
        break;
      case "/empty":
        title = "";
        metaDescription = "";
        break;
      case "/transactionhistory":
        title = "";
        metaDescription = "";
        break;
      case "/oldv1ui":
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

      <Route path="/wallethome" element={<WalletHome />} />

      <Route path="/sendtokenform" element={<SendTokenForm />} />

      <Route path="/assertdetailview" element={<AssertDetailView />} />

      <Route path="/mint-fiat-token" element={<MintFiatToken />} />

      <Route path="/createtokenform" element={<CreateTokenForm />} />

      <Route path="/createtotform" element={<CreateTOTForm />} />

      <Route path="/selltokentotoken" element={<SellTokenToToken />} />

      <Route path="/viewtradesform" element={<ViewTradesForm />} />

      <Route path="/viewordersform" element={<ViewOrdersForm />} />

      <Route
        path="/createordersuccessform"
        element={<CreateOrderSuccessForm />}
      />

      <Route path="/previewsellorderform" element={<PreviewSellOrderForm />} />

      <Route path="/createnftform" element={<CreateNFTForm />} />

      <Route path="/starttocreateorder" element={<StartToCreateOrder />} />

      <Route path="/redir" element={<Redir />} />

      <Route path="/create-wallet" element={<CreateWallet />} />

      <Route path="/openwallet" element={<OpenWallet />} />

      <Route path="/scantopay" element={<ScanToPay />} />

      <Route path="/selltokentotot" element={<SellTokenToTOT />} />

      <Route path="/selltottotot" element={<SellTOTToTOT />} />

      <Route path="/selltottotoken" element={<SellTOTToToken />} />

      <Route path="/empty" element={<Empty />} />

      <Route path="/transactionhistory" element={<TransactionHistory />} />

      <Route path="/oldv1ui" element={<OldV1UI />} />
      <Route path="/scantopay" element={<ScanToPay />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;

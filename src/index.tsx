import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";
import { Provider, connect } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { store, persistor, history } from "./app/store";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material";
import "./global.css";
import Shell from "./Shell";
import { BlockchainAPI } from "./app/blockchain/blockchain-api";

BlockchainAPI.setNetworkId(process.env.REACT_APP_NETWORK_ID);

const muiTheme = createTheme();

const container = document.getElementById("root")!;
const root = createRoot(container);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Shell />
          </ThemeProvider>
        </StyledEngineProvider>
      </Router>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// After
//root.unmount();

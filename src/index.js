import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyle from "./components/styles/GlobalStyle";
import App from "./App";
import Spinners from "./components/Base/Spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const queryClient = new QueryClient();
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={<Spinners />} persistor={persistor}>
          <GlobalStyle />
          <App />
          <ReactQueryDevtools />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

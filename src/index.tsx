import "./index.scss";
import React from "react";
import "antd/dist/antd.css";
import App from "./app/App";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./app/Providers/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl">
      <UserProvider>
        <App />
      </UserProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClerkProvider } from "@clerk/clerk-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log(clerkFrontendApi);

if (!clerkFrontendApi) {
  throw new Error("Key was not found");
}
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

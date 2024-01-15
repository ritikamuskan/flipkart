import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
//import NavBar from "./navbar/NavBar";
import { UserProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);

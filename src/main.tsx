import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RiddlesProvider from "./context/RiddlesProvider";

import './index.css'
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <RiddlesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RiddlesProvider>
);

import { Theme } from "@carbon/react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TokenProvider } from "./components/TokenProvider/TokenProvider";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <Theme theme="white">
      <>
        <BrowserRouter>
          <TokenProvider>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </TokenProvider>
        </BrowserRouter>
      </>
    </Theme>
  );
}

export default App;

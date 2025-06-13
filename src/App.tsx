import { Theme } from "@carbon/react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TokenProvider } from "./components/TokenProvider/TokenProvider";
import { Login } from "./pages/Login/Login";
import LandingPagePrototype from "./pages/LandingPagePrototype/LandingPagePrototype";

function App() {
  return (
    <Theme theme="white">
      <>
        <BrowserRouter>
          <TokenProvider>
            <Routes>
              <Route path="/" element={<LandingPagePrototype />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </TokenProvider>
        </BrowserRouter>
      </>
    </Theme>
  );
}

export default App;

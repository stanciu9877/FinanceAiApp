import { Theme } from "@carbon/react";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TokenProvider } from "./components/TokenProvider/TokenProvider";
import { Login } from "@carbon/icons-react";
import { LandingPage } from "./pages/LandingPage/LandingPage";

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

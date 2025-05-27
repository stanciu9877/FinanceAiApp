import { Theme } from "@carbon/react";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <Theme theme="g10">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Header />
          <MainContent />
        </div>
      </div>
    </Theme>
  );
}

export default App;

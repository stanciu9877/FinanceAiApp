import React from "react";
import {
  Header as CarbonHeader,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "@carbon/react";
import { User } from "@carbon/icons-react";
import "./styles.scss";

const Header = () => {
  return (
    <CarbonHeader aria-label="FinAI Header">
      <HeaderName href="#" prefix="FinAI">
        Dashboard
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="User Profile">
          <User />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </CarbonHeader>
  );
};

export default Header;

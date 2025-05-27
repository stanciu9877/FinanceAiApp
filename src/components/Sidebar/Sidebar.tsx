import { SideNav, SideNavItems, SideNavLink } from "@carbon/react";
import "./styles.scss";

const Sidebar = () => {
  return (
    <SideNav aria-label="Side navigation" expanded>
      <SideNavItems>
        <SideNavLink href="#">Dashboard</SideNavLink>
        <SideNavLink href="#">AI Advisor</SideNavLink>
        <SideNavLink href="#">Portfolio</SideNavLink>
        <SideNavLink href="#">Settings</SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default Sidebar;

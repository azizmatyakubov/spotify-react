import React from "react";
import styled from "styled-components";
import SidebarButton from "./SidebarButton";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoContainer>
        <img src="/images/logo.png" alt="" srcset="" />
      </LogoContainer>
      <SidebarItems>
        <SidebarItem img={<i class="fa-solid fa-house"></i>} text={"Home"} />
        <SidebarItem
          img={<i class="fa-solid fa-magnifying-glass"></i>}
          text={"Search"}
        />
        <SidebarItem
          img={<i class="fa-solid fa-house"></i>}
          text={"Your library"}
        />
      </SidebarItems>

      <SidebarButtons>
        <SidebarButton color={"white"} text={"Sign up"} />
        <SidebarButton color={"grey"} text={"Login"} />
      </SidebarButtons>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  width: 20%;
  background-color: black;
  height: 100vh;
  position: relative;
`;

const LogoContainer = styled.div`
  padding: 2rem;

  img {
    width: 80%;
  }
`;

const SidebarItems = styled.div``;

const SidebarButtons = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
`;

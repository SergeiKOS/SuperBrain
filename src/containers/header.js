import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Menu from "../components/menu";
import { GiBrain } from "react-icons/gi";
import SvgIcon from "../components/SvgIcon";

const HeaderContainer = () => {
  return (
    <>
      <Header>
        <Header.Wrapper className="container">
          <Menu>
            <Menu.Btn>Open menu</Menu.Btn>
            <Menu.List>
              <Menu.Item>
                <Menu.Link exact to="/">
                  Home
                </Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/memory">Memory</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/trivia">Trivia</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/hotorcold">HotOrCold</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/calculations">Calculations</Menu.Link>
              </Menu.Item>
            </Menu.List>
          </Menu>
          <Logo style={{ position: "relative" }}>
            <Logo.Link to="/">
              <span style={{ marginRight: "53px" }}>Super</span>
              <SvgIcon color="black" size="50px">
                <div style={{ position: "absolute", top: "-5px", right: 0 }}>
                  <GiBrain />
                </div>
              </SvgIcon>
            </Logo.Link>
          </Logo>
        </Header.Wrapper>
      </Header>
    </>
  );
};

export default HeaderContainer;

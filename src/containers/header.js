import React from "react";
import Header from "../components/header";
import Logo from "../components/logo";
import Menu from "../components/menu";

const HeaderContainer = () => {
  return (
    <>
      <Header>
        <Header.Wrapper className="container">
          <Menu>
            <Menu.Btn>Open menu</Menu.Btn>
            <Menu.List>
              <Menu.Item>
                <Menu.Link to="/">Home</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/calculations">Calculations</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/trivia">Trivia</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/hotorcold">HotOrCold</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/game4">Game 4</Menu.Link>
              </Menu.Item>
            </Menu.List>
          </Menu>
          <Logo>
            <Logo.Link to="/">Superbrain</Logo.Link>
          </Logo>
        </Header.Wrapper>
      </Header>
    </>
  );
};

export default HeaderContainer;

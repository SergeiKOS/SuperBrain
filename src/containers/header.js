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
                <Menu.Link to="/">
                  Home
                </Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/calculations">Calculations</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/trivia">Trivia</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/game3">Game 3</Menu.Link>
              </Menu.Item>
              <Menu.Item>
                <Menu.Link to="/games/game4">Game 4</Menu.Link>
              </Menu.Item>
            </Menu.List>
          </Menu>
          <Logo>
            <Logo.Link to="/">Suuuuperbrain</Logo.Link>
          </Logo>
          Profile* {/* сделать наверно margin-right: 18px */}
        </Header.Wrapper>
      </Header>
    </>
  )
};

// const Header = () => {
//   return (
//     <Header>
//       <Wrapper className="container">

//         {/*Profile*/} {/* сделать наверно margin-right: 18px */}
//       </Wrapper>
//     </Header>
//   );
// };

export default HeaderContainer;

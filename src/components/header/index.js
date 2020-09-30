import React from "react";

import { HeaderCss, Wrapper } from "./styles/header";


export default function Header({ children, ...restProps }) {
  return <HeaderCss {...restProps}>{children}</HeaderCss>;
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

// const Header = () => {
//   return (
//     <Header>
//       <Wrapper className="container">

//         {/*Profile*/} {/* сделать наверно margin-right: 18px */}
//       </Wrapper>
//     </Header>
//   );
// };


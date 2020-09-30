import React from "react";
import { FooterCss } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return (
    <FooterCss {...restProps}>
      {children}
    </FooterCss>
  );
}

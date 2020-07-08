import React from "react";
import { Link } from "react-router-dom";

import { LogoCss } from "./LogoCss";

const Logo = () => {
  return (
    <LogoCss>
      <Link to="/">SuperBrain</Link>
    </LogoCss>
  );
};

export default Logo;

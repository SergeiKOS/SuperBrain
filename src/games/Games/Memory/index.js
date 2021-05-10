import React from "react";
import { useLocation } from "react-router-dom";

import Memory from "./containers/memory";
import BeforeGame from "./containers/beforeGame";

const MemoryWindowStart = () => {
  const location = useLocation();

  const getPageFromLocation = () => {
    if (location.pathname === "/games/memory") {
      return <BeforeGame />;
    } else {
      return <Memory />;
    }
  };

  return getPageFromLocation();
};

export default MemoryWindowStart;
  
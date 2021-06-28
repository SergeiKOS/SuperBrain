import React from "react";

import * as S from "./styles/tile";

export default function Tile({ ...restProps }) {
  return <S.TileBlock {...restProps} />;
}

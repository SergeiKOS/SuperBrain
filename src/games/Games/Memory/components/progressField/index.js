import React from "react";

import * as S from "./style/progressField";

export default function ProgressField({ ...restProps }) {
  return <S.ProgressContainer {...restProps} />;
}

ProgressField.ProgressBlock = function ProgressFieldProgressBlock({
  children,
  ...restProps
}) {
  return <S.ProgressBlock {...restProps}>{children}</S.ProgressBlock>;
};

ProgressField.Text = function ProgressFieldText({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

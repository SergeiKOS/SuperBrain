import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

import { colors } from "../../../commonStyles/variables";
import { font } from "../../../commonStyles/variables";

export const Card = styled(motion(RouterLink))`
  width: 280px;
  text-align: center;
  margin-bottom: 50px;
  text-align: center;
  outline: 1px solid ${colors.primary};

  &:hover {
    transition: all 0.3s;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${colors.primary};
  }
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: ${font.fontBigger};
  padding: 5px;
  padding-bottom: 10px;
`;

export const Image = styled.img``;

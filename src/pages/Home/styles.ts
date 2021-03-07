import styled from "styled-components";

import { colors, pxToRem } from "../../utils";

const background = colors.greyBackground;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${pxToRem(1440)};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${pxToRem(1440)};
  height: auto;
  background-color: ${background};
`;

export const Cards = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Cart = styled.div``;

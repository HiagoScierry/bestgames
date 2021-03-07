import { colors, pxToRem } from "../../utils";
import styled from "styled-components";

const white = colors.white;
const green = colors.green;

export const Container = styled.div`
  width: ${pxToRem(250)};
  height: ${pxToRem(350)};
  background-color: ${white};
  border-radius: ${pxToRem(20)};

  display: flex;
  flex-direction: column;

  padding: ${pxToRem(15)};
  margin: ${pxToRem(15)};

`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${pxToRem(20)};
`;

export const Name = styled.p`
  font-size: ${pxToRem(18)};
  font-weight: 600;
`;

export const Price = styled.p`
  font-size: ${pxToRem(14)};
  font-weight: 600;
`;

export const AddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${pxToRem(25)};
  background-color: ${green};
  color: ${white};

  height: ${pxToRem(40)};
  border-radius: ${pxToRem(5)};
`;

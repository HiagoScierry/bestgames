import styled from "styled-components";
import { Wrapper } from "../../components/Header/styles";

import { colors, pxToRem } from "../../utils";

const background = colors.greyBackground;
const white = colors.white;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${pxToRem(1440)};
`;

export const Body = styled.div`
  width: 100%;
  max-width: ${pxToRem(1440)};
  justify-content: center;
  align-items: center;

  height: auto;
  background-color: ${background};
`;

export const WrapperBody = styled.div`
  display: flex;
  width: 100%;
  max-width: ${pxToRem(1440)};
  height: auto;
`;

export const Cards = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Cart = styled.div`
  width: 50%;
  height: 100vh;

  position: fixed;
  left: 69%;
  top: 20%;
`;

export const CartContainer = styled.div`
  background-color: ${white};

  width: 50%;
  height: ${pxToRem(500)};
  background-color: ${white};

  border-radius: ${pxToRem(20)};
  padding: ${pxToRem(30)};
`;

export const WrapperLabelColumn = styled.div`
  width: 100%;
`;

export const WrapperLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  height: ${pxToRem(50)};
`;

export const Label = styled.p`
  font-size: ${pxToRem(16)};

  font-weight: 500;
`;

export const ItemCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(50)};
  padding-left: ${pxToRem(10)};
  padding-right: ${pxToRem(10)};

  :hover {
    background-color: #f23052;
    color: ${white};
    border-radius: ${pxToRem(10)};
    transition: 1s;
  }
`;

export const NameAndUnits = styled.div``;

export const Name = styled.p`
  font-weight: 500;
  font-size: ${pxToRem(14)};
`;

export const Units = styled.p`
  font-size: ${pxToRem(12)};
`;

export const Price = styled.div`
  font-size: ${pxToRem(14)};
`;

export const Shipping = styled.div`
  font-size: ${pxToRem(14)};
`;

export const TotalValue = styled.div`
  font-size: ${pxToRem(14)};
  font-weight: 500;
`;

export const WrapperOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(50)};
`;

export const Order = styled.select`
  height: ${pxToRem(25)};
  width: ${pxToRem(200)};
  background-color: ${white};

  text-align: center;
  border: 0 none;
`;

export const ContainerOrder = styled.div`
  background-color: ${white};
  width: ${pxToRem(250)};
  height: ${pxToRem(30)};
  border-radius: ${pxToRem(20)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TypeOrder = styled.option`
  width: ${pxToRem(250)};
`;

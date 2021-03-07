import styled from "styled-components";
import {
  colors,
  pxToRem,
  Github as _Github,
  Linkedin as _Linkedin,
  Search as _Search,
} from "../../utils";

const primary = colors.primary;
const white = colors.white;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primary};
  width: 100%;
  height: 7vh;
  color: ${white};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

export const Icon = styled.h1`
  font-weight: 600;
  font-size: ${pxToRem(30)};
`;

export const SearchAndSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Github = styled(_Github)`
  margin-right: ${pxToRem(10)};

  color: ${white};
`;

export const Linkedin = styled(_Linkedin)`
  color: ${white};
  margin-right: ${pxToRem(10)};
`;
export const Search = styled(_Search)`
  color: ${primary};
`;

export const WrapperInput = styled.div`
  background-color: ${white};
  width: ${pxToRem(250)};
  border-radius: 10px;
  height: 5vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.input`
  border: 0 none;
`;

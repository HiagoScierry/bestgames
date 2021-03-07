import React from "react";

import {
  Container,
  Wrapper,
  Icon,
  SearchAndSocial,
  Github,
  Linkedin,
  WrapperInput,
  Input,
  Search,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Icon>BESTGAMES</Icon>
        <SearchAndSocial>
          <Github size={25} />
          <Linkedin size={25} />
          <WrapperInput>
            <Input />
            <Search size={25} />
          </WrapperInput>
        </SearchAndSocial>
      </Wrapper>
    </Container>
  );
};

export default Header;

import React from "react";
import Header from "src/components/Header";

import { Body, Container, Cards, Cart } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Cards></Cards>
        <Cart></Cart>
      </Body>
    </Container>
  );
};

export default Home;

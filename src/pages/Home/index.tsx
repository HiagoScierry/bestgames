import React, { useState } from "react";

import { Body, Container, Cards, Cart } from "./styles";

import Card from "../../components/Card";
import Header from "../../components/Header";

import products from "../../products.json";


const Home: React.FC = () => {
  const [games, setGames] = useState(products);

  return (
    <Container>
      <Header />
      <Body>
        <Cards>
          {games.map((index) => {
            return (
              <Card
                key={index.id}
                id={index.id}
                name={index.name}
                image={index.image}
                score={index.score}
                price={index.price}
              />
            );
          })}
        </Cards>
        <Cart></Cart>
      </Body>
    </Container>
  );
};

export default Home;

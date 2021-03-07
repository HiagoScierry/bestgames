import React from "react";

import { Container, Image, Name, Price, AddCart } from "./styles";


interface props {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  addcart: () => void;
}

const Card: React.FC<props> = ({ id, name, price, score, image, addcart }) => {


  return (
    <Container>
      <Image>
        <img src={require(`../../assets/${image}`).default} alt={name} />
      </Image>
      <Name>{name}</Name>
      <Price>Valor : R${price}</Price>
      <AddCart onClick={addcart}>Adicionar ao carrinho</AddCart>
    </Container>
  );
};

export default Card;

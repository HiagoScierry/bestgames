import React, { useEffect, useState } from "react";

import {
  Body,
  Container,
  Cards,
  Cart,
  CartContainer,
  ItemCart,
  Shipping,
  TotalValue,
  Label,
  WrapperLabelColumn,
  WrapperLabelRow,
  NameAndUnits,
  Name,
  Units,
  Price,
  Order,
  TypeOrder,
  WrapperBody,
  WrapperOrder,
  ContainerOrder,
} from "./styles";

import Card from "../../components/Card";
import Header from "../../components/Header";

import products from "../../products.json";

interface item {
  id: number;
  name: string;
  price: number;
  units: number;
}
interface cart {
  total: number;
  ship: number;
}

interface product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const Home: React.FC = () => {
  const initialCart = {
    total: 0,
    ship: 0,
  };

  const [order, setOrder] = useState<string>("name");
  const [games, setGames] = useState<product[]>(products);
  const [checkout, setCheckout] = useState<cart>(initialCart);
  const [checkoutItems, setCheckoutItem] = useState<item[]>([]);

  const updateCart = (name: string, price: number) => {
    const id = checkoutItems.length;
    setCheckoutItem((prev) => {
      return [...prev, { id: id, name: name, price: price, units: 0 }];
    });

    setCheckout((prev) => {
      return {
        total: prev.total + price,
        ship: prev.total + price > 250 ? 0 : prev.ship + 10,
      };
    });
  };

  const changeOrder = (order: string) => {
    console.log(order);
    if (order == "score") {
      setGames(
        games.sort((a, b) => {
          if (a.score > b.score) {
            return 1;
          }
          if (a.score < b.score) {
            return -1;
          }
          return 0;
        })
      );
    }
    if (order == "name") {
      setGames(
        games.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    }
    if (order == "price") {
      setGames(
        games.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        })
      );
    }
  };

  const removeItem = (item: number, price: number) => {
    setCheckoutItem((prev) => {
      return prev.splice(0, item);
    });

    const newShip =
      checkout.total - price > 250 ? 0 : checkoutItems.length * 10 - 10;

    setCheckout((prev) => {
      return {
        total: prev.total - price,
        ship: newShip,
      };
    });
  };

  useEffect(() => {
    changeOrder(order);
  }, [order]);

  return (
    <Container>
      <Header />
      <Body>
        <WrapperOrder>
          <ContainerOrder>
            <Order onChange={(e) => setOrder(e.target.value)}>
              <TypeOrder value="name">Alfabetico</TypeOrder>
              <TypeOrder value="score">Popularidade</TypeOrder>
              <TypeOrder value="price">Preço</TypeOrder>
            </Order>
          </ContainerOrder>
        </WrapperOrder>
        <WrapperBody>
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
                  addcart={() => updateCart(index.name, index.price)}
                />
              );
            })}
          </Cards>
          <Cart>
            <CartContainer>
              <WrapperLabelColumn>
                <Label>
                  Seu carrinho :{" "}
                </Label>
                {checkoutItems.length > 0 ? (
                  <>
                    {checkoutItems.map((index) => {
                      return (
                        <ItemCart
                          key={index.id}
                          onClick={() =>
                            removeItem(
                              checkoutItems.indexOf(index),
                              index.price
                            )
                          }
                        >
                          <NameAndUnits>
                            <Name>{index.name}</Name>
                            <Units>{index.units}x</Units>
                          </NameAndUnits>
                          <Price>R${index.price}</Price>
                        </ItemCart>
                      );
                    })}
                  </>
                ) : (
                  <Label>SEM ITENS</Label>
                )}
              </WrapperLabelColumn>
              <WrapperLabelRow>
                <Label>Frete :</Label>
                <Shipping> R${checkout.ship}</Shipping>
              </WrapperLabelRow>
              <WrapperLabelRow>
                <Label>Subtotal :</Label>
                <TotalValue>R${checkout.total}</TotalValue>
              </WrapperLabelRow>
              <WrapperLabelRow>
                <Label>Total :</Label>
                <TotalValue>R${checkout.total + checkout.ship}</TotalValue>
              </WrapperLabelRow>
            </CartContainer>
          </Cart>
        </WrapperBody>
      </Body>
    </Container>
  );
};

export default Home;

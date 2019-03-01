import React from "react";
import { cn } from "@bem-react/classname";
import Products from "./components/Products/Products";
import Cat from "./img/Cat.png";
import "./App.css";

const cnApp = cn("App");

const App = () => {
  const dataProducts = [
    {
      id: 1,
      text: "Сказочное заморское яство",
      title: "Нямушка",
      subtitle: "с фуа-гра",
      amountOfPortions: "10 ",
      portions: "порций",
      amountOfGiftMouse: undefined,
      giftMouseDesc: "мышь в подарок",
      customerSatisfaction: undefined,
      image: Cat,
      weight: "0,5",
      desciptionDisabled: "Печалька, с фуа-гра закончился.",
      desciptionSelected: "Печень утки разварная с артишоками.",
      disabled: false
    },
    {
      id: 2,
      text: "Сказочное заморское яство",
      title: "Нямушка",
      subtitle: "с рыбой",
      amountOfPortions: "40 ",
      portions: "порций",
      amountOfGiftMouse: 2,
      giftMouseDesc: "мыши в подарок",
      customerSatisfaction: undefined,
      image: Cat,
      weight: "2",
      desciptionDisabled: "Печалька, с рыбой закончился.",
      desciptionSelected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      disabled: false
    },
    {
      id: 3,
      text: "Сказочное заморское яство",
      title: "Нямушка",
      subtitle: "с курой",
      amountOfPortions: "100 ",
      portions: "порций",
      amountOfGiftMouse: 5,
      giftMouseDesc: "мышей в подарок",
      customerSatisfaction: "заказчик доволен",
      image: Cat,
      weight: "5",
      desciptionDisabled: "Печалька, с курой закончился.",
      desciptionSelected: "Филе из цыплят с трюфелями в бульоне.",
      disabled: true
    }
  ];
  return (
    <div className={cnApp()}>
      <header className={cnApp("Header")}>
        <p className={cnApp("Title")}>Ты сегодня покормил кота?</p>
      </header>
      <main>
        <Products data={dataProducts} />
      </main>
    </div>
  );
};

export default App;

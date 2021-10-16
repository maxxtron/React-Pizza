import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";

const Home = ({ categoriesName, pizzasItems }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoriesName={categoriesName} />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaBlock
        pizzasItems={pizzasItems}
        item={pizzasItems.map((item) => item)}
      />
    </div>
  );
};

export default Home;

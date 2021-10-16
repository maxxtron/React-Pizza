import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);
  // при первом рендере получаем данные с фэйк базы через useEffect
  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);
  const [categoriesName] = useState([
    {
      name: "Все",
      id: 1,
    },
    {
      name: "Мясные",
      id: 2,
    },
    {
      name: "Вегетарианская",
      id: 3,
    },
    {
      name: "Гриль",
      id: 4,
    },
    {
      name: "Острые",
      id: 5,
    },
    {
      name: "Закрытые",
      id: 6,
    },
  ]);
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      {/* Что б на главной всегда светился контент */}
      <Route
        path="/"
        render={() => (
          <Home categoriesName={categoriesName} pizzasItems={pizzas} />
        )}
        exact
      />
      <Route path="Cart" component={Cart} />
    </div>
  );
}

export default App;

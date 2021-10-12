import React, { useState } from "react";
import { Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
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
    <div className='wrapper'>
      <Header />
      <div className='content'></div>
      {/* Что б на главной всегда светился контент */}
      <Route
        path='/'
        render={() => <Home categoriesName={categoriesName} />}
        exact
      />
      <Route path='Cart' component={Cart} />
    </div>
  );
}

export default App;

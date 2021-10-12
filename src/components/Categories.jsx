import React, { useState } from "react";

const Categorios = ({ categoriesName }) => {
  const [active, setActive] = useState(1);
  //добавляем active class по id элемента
  const changeClassName = (item) => {
    setActive(item);
  };
  return (
    <div className='categories'>
      <ul>
        {categoriesName.map((item) => {
          return (
            <li
              onClick={() => changeClassName(item.id)}
              className={active === item.id ? "active" : ""}
              key={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categorios;

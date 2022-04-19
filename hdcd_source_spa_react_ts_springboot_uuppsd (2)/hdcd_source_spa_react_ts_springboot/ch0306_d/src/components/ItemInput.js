import React from "react";

const ItemInput = ({ items, onChangePrice }) => {

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.name}의 가격:{" "}
          <input
            type="text"
            value={item.price}
            onChange={(e) => onChangePrice(item.name, e.target.value)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemInput;

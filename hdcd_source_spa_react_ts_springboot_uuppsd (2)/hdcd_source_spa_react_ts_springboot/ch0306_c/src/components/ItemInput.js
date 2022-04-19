import React from "react";

const ItemInput = ({ items, onChangePrice }) => {
  const handleChange = (e) => {
    console.log("name : " + e.target.name);
    console.log("value : " + e.target.value);

    onChangePrice(e.target.name, e.target.value);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.name}의 가격:{" "}
          <input
            type="text"
            name={item.name}
            value={item.price}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemInput;

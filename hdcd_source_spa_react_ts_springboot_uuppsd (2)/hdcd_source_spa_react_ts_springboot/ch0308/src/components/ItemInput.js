import React, { useCallback } from "react";

const ItemInput = ({ items, onChangePrice }) => {
  const handleChange = useCallback(
    (e) => {
      const selectedName = e.target.dataset.itemName;

      console.log("name : " + selectedName);
      console.log("value : " + e.target.value);

      onChangePrice(selectedName, e.target.value);
    },
    [onChangePrice]
  );

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.name}의 가격:{" "}
          <input
            type="text"
            value={item.price}
            data-item-name={item.name}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemInput;

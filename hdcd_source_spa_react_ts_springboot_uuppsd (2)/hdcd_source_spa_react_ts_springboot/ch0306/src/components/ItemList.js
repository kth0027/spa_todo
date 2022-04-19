import React, { useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const itemDataArray = [
    {
      name: "CPU",
      price: 462984,
      quantity: 1,
    },
    {
      name: "메인보드",
      price: 112053,
      quantity: 1,
    },
    {
      name: "메모리",
      price: 79608,
      quantity: 2,
    },
  ];

  const [items] = useState(itemDataArray);
 
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;

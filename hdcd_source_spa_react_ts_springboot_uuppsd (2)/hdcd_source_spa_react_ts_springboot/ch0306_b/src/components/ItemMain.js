import React, { useState } from "react";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";

const ItemMain = () => {
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
    <>
      <ItemList items={items} />
      <ItemTotal items={items} />
    </>
  );
};

export default ItemMain;

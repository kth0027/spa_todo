import React, { useState } from "react";
import ItemInput from "./ItemInput";
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

  const [items, setItems] = useState(itemDataArray);

  const onChangePrice = (name, price) => {
    console.log("onChangePrice name : " + name + " price : " + price);

    setItems((items) =>
      items.map((item) =>
        item.name === name ? { ...item, price: price } : item
      )
    );
  };

  return (
    <>
      <ItemInput items={items} onChangePrice={onChangePrice} />
      <hr />
      <ItemList items={items} />
      <ItemTotal items={items} />
    </>
  );
};

export default ItemMain;

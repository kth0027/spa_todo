import React, { useState } from "react";
import ItemInput from "./ItemInput";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";

const ItemMain = () => {
  function createDummyItems() {
    const itemDataArray = [];

    for (let i = 1; i < 2000; i++) {
      itemDataArray.push({
        name: `item${i}`,
        price: parseInt(100000 * Math.random(), 10),
        quantity: 1 + parseInt(10 * Math.random(), 10),
      });
    }

    return itemDataArray;
  }

  const [items, setItems] = useState(createDummyItems());

  const onChangePrice = (name, price) => {
    console.log("onChangePrice name : " + name + " price : " + price);
    
    setItems(
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

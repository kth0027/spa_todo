import React from "react";
import Item from "./Item";

const ItemList = ({ items, totalPrice }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
      <p>합계: {totalPrice} 원</p>
    </>
  );
};

export default ItemList;

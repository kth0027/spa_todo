import React from "react";

const ItemTotal = ({ items }) => {
  const calcTotalPrice = (items) => {
    return items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
  };

  return <p>합계: {calcTotalPrice(items)} 원</p>;
};

export default ItemTotal;

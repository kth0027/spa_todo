import React, { useState } from "react";
import "./App.css";

const App = () => {
  var itemDataArray = [
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

  const totalPrice = items.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name}: {item.price} x {item.quantity} = {item.price * item.quantity} 원
          </li>
        ))}
      </ul>

      <p>합계: {totalPrice} 원</p>
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { Plus, Minus } from "react-feather";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const Counter = () => {
  const { user } = useAuth0();
  const { name } = user;

  const initialCount = () => Number(window.localStorage.getItem("count")) || 0;

  const [count, setCount] = useState(initialCount);

  const handleIncrement = (number) => setCount(number + 1);
  const handleDecrement = (number) => setCount(number - 1);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="">
      <Navbar />
      <p className="text-5xl m-5">Welcome, {name} </p>
      <div className=" h-64 flex  items-center justify-center">
        <button onClick={() => handleDecrement(count)}>
          <Minus className=" bg-indigo-500 rounded-sm text-white" />
        </button>
        <div className="text-3xl m-4">Count is: {count}</div>
        <button onClick={() => handleIncrement(count)}>
          <Plus className=" bg-indigo-500 rounded-sm text-white" />
        </button>
      </div>
    </div>
  );
};

export default Counter;

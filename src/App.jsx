import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="h-screen w-screen flex my-[80px] flex-col items-center">
      <div className="text-4xl tracking-widest font-semibold">
        Learn  About  Redux  ToolKit
      </div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;

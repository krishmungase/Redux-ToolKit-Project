import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input != "") {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 flex items-center justify-center"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 
                focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 px-3 
                leading-8 transition-colors duration-200 ease-in-out h-[40px] min-w-[300px]"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:ring-indigo-600 
                rounded  text-lg h-[40px] flex items-center justify-center text-md font-bold
            "
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;

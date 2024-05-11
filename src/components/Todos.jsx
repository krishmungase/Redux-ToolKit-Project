import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

const RemoveTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex w-[60%] space-y-3 flex-col my-5">
      <div className="flex items-center gap-x-3 mx-2">
        <h1 className="text-lg font-bold">Todos</h1>
        <LuListTodo className="size-5 font-bold" />
      </div>
      <ul className="list-none">
        {
         todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded "
          >
            <div>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 outline-none hover:bg-red-600 rounded text-md"
            >
              <MdOutlineDeleteSweep className="size-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemoveTodo;

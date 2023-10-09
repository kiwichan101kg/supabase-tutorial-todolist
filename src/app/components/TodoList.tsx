import React from "react";

const TodoList = () => {
  return (
    <div>
      <ul className="mx-auto">
        {/* {todos.map((todo) => ( */}
        <div className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between">
          <li className="font-medium">✅ aaa</li>
          <span className="cursor-pointer">✖</span>
        </div>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default TodoList;

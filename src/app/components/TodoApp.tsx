import React from "react";
import TodoList from "./TodoList";

async function fetchAllTodos() {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    cache: "no-cache", //SSR
  });
  const data = await res.json();
  return data;
}

const Todoapp = async () => {
  const todos = await fetchAllTodos();
  console.log(todos);

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3>Supabase Todo Appp</h3>
      <form>
        <input type="text" className="mr-2 shadow-lg p-1 outline-none" />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">
          Add
        </button>
      </form>
      <TodoList />
    </section>
  );
};

export default Todoapp;

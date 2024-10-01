import { Todo } from "@/types/todo";

const BASE_URL = 'https://simple-todo-api.arafipro.workers.dev';

export const getTodos = async () => {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('not found');
  }
  return res.json<Todo[]>();
}
  export const createTodo = async (todo: Todo) => {
    const res = await fetch(`${BASE_URL}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error("not register");
    }
    return res.json();
  };  
  export const deleteTodo = async (id: number) => {
    const res = await fetch(`${BASE_URL}/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("not delete");
    }
  };
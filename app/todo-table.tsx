'use client';

import { deleteTodo } from "@/lib/api";
import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";

export const TodoTable = async (props: {
  todos: Todo[];
}) => {
  const router = useRouter();

  return (
    <table className="w-full border-y-2">
      <thead className="border-b">
        <tr>
          <th>Title</th>
          <th>about</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="text-center">
        {props.todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.content}</td>
            <td>
              <button
                onClick={async () => {
                  await deleteTodo(todo.id!);
                  router.refresh();
                }}
                className="bg-red-500 text-white rounded-lg p-1 w-full"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
import { getTodos } from "@/lib/api";
import { TodoTable } from "./todo-table";
import { Todo } from "@/types/todo";
import { TodoForm } from "./components/todo-form";

export const runtime = 'edge';

export default async function Home() {
  const todos: Todo[] = await getTodos();

  return (
    <main className="mx-auto space-y-8">
      <TodoForm />
      <TodoTable todos={todos} />
    </main>
  );
}

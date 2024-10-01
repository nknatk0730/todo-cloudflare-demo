'use client';

import { createTodo } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

export const TodoForm = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;

    if (!title || !content) {
      return console.log('input title context');
    }
    console.log(`title ${title}  context ${content}`);
    try {
      await createTodo({ title, content });
      titleRef.current!.value = "";
      contentRef.current!.value = "";
    } catch (error) {
      return error;
    }
    router.refresh();
  }

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" className="border-2 rounded-lg p-1" ref={titleRef} />
      <label>Context</label>
      <input type="text" className="border-2 rounded-lg p-1" ref={contentRef} />
      <div className="flex space-x-4 mt-4">
        <button
          type="submit"
          className="bg-black text-white rounded-lg w-full p-1"
        >
          register
        </button>
        <button
          type="reset"
          className="bg-white text-black border-2 border-black/30 rounded-lg p-1 w-full"
        >
          reset
        </button>
      </div>
    </form>
  );
}
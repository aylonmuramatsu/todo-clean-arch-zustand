import { useEffect, useRef, useState } from "react"
import { getAllTodoUseCase } from "../application/todo/get-all.use-case";
import { markAsDoneUseCase } from "../application/todo/mark-as-done.use-case";
import { useTodo } from "../infra/zustand/todo"

export const App = () => {
  const { todos, loading } = useTodo();

  useEffect(() => {
    getAllTodoUseCase()
  },[])


  return (
    <div>
      <h3>Todo :)</h3>
      {
        loading && (<div>Carregando...</div>) || 
        (
          <ul>  
            {todos.map((i, k) => (
              <li key={i.id} style={{ textDecoration: i.completed ? "line-through" : "none" , paddingTop: 15, paddingBottom: 15}}>
                {i.title} &nbsp;
                <button type="button" onClick={() => markAsDoneUseCase(i.id)}>{i.completed ? 'Undo' : 'Done'}</button>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}
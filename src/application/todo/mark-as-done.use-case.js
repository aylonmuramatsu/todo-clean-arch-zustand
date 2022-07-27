import produce from "immer";
import {  useTodo } from "../../infra/zustand/todo";

export const markAsDoneUseCase = async (todoId) => {
  const {todos} = useTodo.getState()
  useTodo.setState({ todos: produce(todos, draft => {
    const todoItem = draft.find(i => i.id === todoId )
    if(!todoItem) return draft;
    todoItem.completed = !todoItem.completed;
    return draft;
  })})

}
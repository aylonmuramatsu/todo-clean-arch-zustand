import todoRepository from "../../infra/services/todoRepository"
import {  useTodo } from "../../infra/zustand/todo";

export const getAllTodoUseCase = async () => {
  
  useTodo.setState({ loading: true})
  const { data } = await todoRepository.getAllTodo();

  useTodo.setState({ todos: data, loading: false})

}
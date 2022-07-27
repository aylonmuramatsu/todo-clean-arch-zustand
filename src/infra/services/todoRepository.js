/* eslint-disable import/no-anonymous-default-export */
import { api } from "./api";

const getAllTodo = () => api.get('/todos')

export default {
  getAllTodo
}
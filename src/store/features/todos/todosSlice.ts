import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoStructure, TodosStructure } from "../../../types";

const initialTodos: TodosStructure = [];

const todosSlice = createSlice({
  name: "todo's",
  initialState: initialTodos,
  reducers: {
    loadTodos: (currentTodos, action: PayloadAction<TodosStructure>) => [
      ...action.payload,
    ],
    removeTodo: (currentTodos, action: PayloadAction<number>) =>
      currentTodos.filter((todo) => todo.id !== action.payload),
    toggleTodoIsDone: (currentTodos, action: PayloadAction<number>) =>
      currentTodos.map((todo) => ({
        ...todo,
        isDone: todo.id === action.payload ? !todo.isDone : todo.isDone,
      })),
    createTodo: (currentTodos, action: PayloadAction<TodoStructure>) => [
      ...currentTodos,
      action.payload,
    ],
  },
});

export const todosReducer = todosSlice.reducer;
export const {
  loadTodos: loadTodosActionCreator,
  removeTodo: removeTodoActionCreator,
  toggleTodoIsDone: toggleTodoIsDoneActionCreator,
  createTodo: createTodoActionCreator,
} = todosSlice.actions;

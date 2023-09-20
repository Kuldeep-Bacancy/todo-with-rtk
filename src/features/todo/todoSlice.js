import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  todoId: null
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload }
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    },
    updateTodo: (state,action) => {
      state.todos.find((todo) => todo.id == action.payload.id).text = action.payload.text
    },
    currentEditTodoID: (state, action) => {
      state.todoId = action.payload
    }
  }
})

export const { addTodo, removeTodo, updateTodo, currentEditTodoID } = todoSlice.actions

export default todoSlice.reducer
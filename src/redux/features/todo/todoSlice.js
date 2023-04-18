import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      console.log(action);
    }
  }
});

export const { addTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

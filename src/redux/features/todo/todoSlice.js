import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uuid: 1,
  completed: false,
  title: 'title 1',
  description: 'description 1'
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
});

// export const {} = todoSlice.actions;

export default todoSlice.reducer;

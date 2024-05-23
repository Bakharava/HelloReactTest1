import { Todos } from '../../types/todoType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TodoState = {
  todos: Todos[];
  isLoading: boolean;
  error: string;
};

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todosFetching(state) {
      state.isLoading = true;
      state.error = '';
    },
    todosFetchingSuccess(state, action: PayloadAction<Todos[]>) {
      state.isLoading = false;
      state.error = '';
      state.todos = action.payload;
    },
    todosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import * as _ from 'lodash';

interface TodoState {
  id: number;
  title: string;
  desc: string;
  isComplete: boolean;
}

const initialState: TodoState[] = [
  {
    id: 1,
    title: 'test todo title 1',
    desc: 'test todo description 1',
    isComplete: false
  },
  {
    id: 2,
    title: 'test todo title 2',
    desc: 'test todo description 2',
    isComplete: false
  },
  {
    id: 3,
    title: 'test todo title 3',
    desc: 'test todo description 3',
    isComplete: false
  }
];

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoState>) => {
      state = [...state, { ...action.payload }];
    },
    remove: (state, action: PayloadAction<TodoState>) => {
      state = _.filter(state, ({ id }) => action.payload.id !== id);
    },
    complete: (state, action: PayloadAction<TodoState>) => {
      state = _.map(state, (todo) => {
        if (action.payload.id === todo.id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
    },
  },
});

export const { add, remove, complete } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;

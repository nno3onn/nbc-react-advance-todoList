import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const getTodos = createAsyncThunk("todos/getTodos", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/todos");
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const postTodos = createAsyncThunk("todos/postTodos", async ({ title, content }, thunkAPI) => {
  try {
    const data = await axios.post("http://localhost:3001/todos", {
      id: Date.now(),
      title,
      content,
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const updateTodos = createAsyncThunk("todos/updateTodos", async ({ id, title, content }, thunkAPI) => {
  try {
    await axios.patch(`http://localhost:3001/todos/${id}`, { title, content });
    return thunkAPI.fulfillWithValue({ id, title, content });
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (id, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    return thunkAPI.fulfillWithValue(id);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [postTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [postTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [...state.todos, action.payload];
    },
    [postTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [updateTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTodos.fulfilled]: (state, action) => {
      const { id, title, content } = action.payload;
      state.isLoading = false;
      const newTodos = state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, title, content };
        return todo;
      });
      state.todos = newTodos;
    },
    [updateTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [deleteTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

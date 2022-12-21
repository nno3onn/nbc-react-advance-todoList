import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk("todos/getTodos", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/todos");
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const __postTodos = createAsyncThunk("todos/postTodos", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const data = await axios.post("http://localhost:3001/todos", {
      payload,
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const __deleteTodos = createAsyncThunk("todos/deleteTodos", async (postId, thunkAPI) => {
  try {
    console.log(postId);
    const data = await axios.delete(`http://localhost:3001/todos?id=${postId}`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(__postTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__postTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(__postTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(__deleteTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = state.filter((v) => v.id !== action.payload);
    });
    builder.addCase(__deleteTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

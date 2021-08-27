import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface CommentsState {
  comments: Array<Comment>;
}

interface MyKnownError {
  errorMessage: string;
}

const initialState: CommentsState = { comments: [] };

export const fetchComments = createAsyncThunk<
  Array<Comment>,
  void,
  { rejectValue: MyKnownError }
>("main/fetchComments", async (_, { rejectWithValue }) => {
  try {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        return res.data.slice(0, 10).sort((a: Comment, b: Comment) => {
          return b.id - a.id;
        });
      });
    return (await response) as Array<Comment>;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default CommentsSlice.reducer;

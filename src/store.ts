import { configureStore } from "@reduxjs/toolkit";
import CommentsSlice from "reducers/CommentsSlice";
import BetSectionSlice from "reducers/BetSectionSlice";

const store = configureStore({
  reducer: {
    comments: CommentsSlice,
    betSection: BetSectionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
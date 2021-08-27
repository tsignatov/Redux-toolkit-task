import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BetSectionState {
  bet: number;
  draw: number;
}

const initialState: BetSectionState = { bet: 1, draw: 1 };

const BetSectionSlice = createSlice({
  name: "betSection",
  initialState,
  reducers: {
    manageBet(state: BetSectionState, action: PayloadAction<number>) {
      state.bet = action.payload;
    },
    manageDraw(state: BetSectionState, action: PayloadAction<number>) {
      state.draw = action.payload;
    },
  },
});

export const { manageDraw, manageBet } = BetSectionSlice.actions;

export default BetSectionSlice.reducer;

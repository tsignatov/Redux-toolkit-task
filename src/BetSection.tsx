import { InputField } from "InputField";
import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { manageBet, manageDraw } from "reducers/BetSectionSlice";
import { memo } from "react";

interface Props {
  draw: number;
  bet: number;
  counter: number;
}

const BetSection: FC<Props> = ({ draw, bet, counter }) => {
  const dispatch = useDispatch();
  const calculation = useMemo(() => counter * draw * bet, [bet, counter, draw]);

  return (
    <BetSectionContainer>
      <InputField
        labelName="Bet"
        type="number"
        step="0.2"
        value={bet}
        handleInpuChange={(value) => dispatch(manageBet(value))}
      />
      <InputField
        labelName="Draw"
        type="number"
        step="1"
        value={draw}
        handleInpuChange={(value) => dispatch(manageDraw(value))}
      />
      <InputField
        value={calculation}
        type="number"
        labelName="Price"
        disabled={true}
      />
    </BetSectionContainer>
  );
};

export default memo(BetSection);

export const BetSectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  & div {
    display: flex;
    align-items: center;
    width: 33.3%;
    padding: 10px;
    & input {
      flex: 1;
      height: 40px;
      margin-left: 10px;
      width: 100%;
    }
  }
`;

import React from "react";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  state: string;
  text: number;
  onClick: () => void;
  index: number;
  buttonIndex: number;
  counter: number;
}

export const Button: FC<Props> = ({
  text,
  state,
  onClick,
  index,
  buttonIndex,
  counter,
}) => {
  return (
    <ButtonWrapper>
      <ButtonLabel
        state={state}
        index={index}
        buttonIndex={buttonIndex}
        counter={counter}
        onClick={onClick}
      >
        {text}
      </ButtonLabel>
    </ButtonWrapper>
  );
};

export const ButtonLabel = styled.label<{
  state: string;
  index: number;
  buttonIndex: number;
  counter: number;
}>`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  background: ${({ state, index, buttonIndex, counter }) => {
    const background =
      index !== buttonIndex && counter === 12 && state !== "clicked"
        ? "#3b3b3b"
        : state !== "clicked"
        ? "#ffffff"
        : "#ff0000";
    return background;
  }};
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 5px;
  width: 10%;
`;

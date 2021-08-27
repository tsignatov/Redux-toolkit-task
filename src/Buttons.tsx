import { FC, Fragment } from "react";
import React, { useDispatch } from "react-redux";
import { Button } from "Button";

interface IButton {
  index: number;
  state: string;
}

interface Props {
  buttons: Array<IButton>;
  onClick: (arg0: IButton) => void;
  buttonIndex: number;
  counter: number;
}

export const Buttons: FC<Props> = ({
  buttons,
  onClick,
  buttonIndex,
  counter,
}) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {buttons.map((item: IButton, index: number) => {
        return (
          <Button
            text={item.index}
            state={item.state}
            index={item.index}
            buttonIndex={buttonIndex}
            counter={counter}
            key={index}
            onClick={() =>
              dispatch(() => onClick({ index: item.index, state: item.state }))
            }
          />
        );
      })}
    </Fragment>
  );
};

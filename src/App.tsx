import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Buttons } from "Buttons";
import { Comments } from "Comments";
import { Timer } from "Timer";
import BetSection from "BetSection";
import { fetchComments } from "reducers/CommentsSlice";
import { RootState } from "store";

export const App = () => {
  const comments = useSelector((state: RootState) => state.comments.comments);
  const { bet, draw } = useSelector((state: RootState) => state.betSection);
  const dispatch = useDispatch();

  const [counter, setCounter] = useState<number>(0);
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  const [buttons, setButtons] = useState(
    Array.from(Array(80), (_, index) => {
      return { index: index + 1, state: "default" };
    })
  );

  const manageNumbers = useCallback(
    ({ index, state }) => {
      const localButtons = [...buttons];
      if (counter < 12 || state === "clicked") {
        if (localButtons[index - 1].state === "clicked") {
          localButtons[index - 1].state = "default";
          setCounter(counter - 1);
        } else {
          localButtons[index - 1].state = "clicked";
          setCounter(counter + 1);
        }
      }
      if (counter < 12) {
        setButtonIndex(index);
        setButtons(localButtons);
      }
    },
    [buttons, counter]
  );

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <AppContainer>
      <FieldContainer>
        <Buttons
          buttons={buttons}
          onClick={manageNumbers}
          counter={counter}
          buttonIndex={buttonIndex}
        />
      </FieldContainer>
      <BetSection bet={bet} draw={draw} counter={counter} />
      <Timer duration={180} />
      <Comments comments={comments} counter={counter} />
    </AppContainer>
  );
};

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FieldContainer = styled.div`
  display: flex;
  max-width: 800px;
  min-width: 380px;
  flex-wrap: wrap;
`;

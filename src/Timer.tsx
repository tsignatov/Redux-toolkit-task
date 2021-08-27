import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchComments } from "reducers/CommentsSlice";

interface Props {
  duration: number;
}

export const Timer: FC<Props> = ({ duration }) => {
  const time: React.MutableRefObject<any> = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const startTimer = () => {
      let timer = duration,
        minutes,
        seconds;
      const interval = setInterval(() => {
        minutes = parseInt((timer / 60).toString(), 10);
        seconds = parseInt((timer % 60).toString(), 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.current.innerText = minutes + ":" + seconds;

        if (--timer < 0) {
          dispatch(fetchComments());
          timer = duration;
          clearInterval(interval);
        }
      }, 1000);
    };
    startTimer();
  }, [dispatch, duration]);

  const convertToMS = (value: number) => {
    const sec = value; // convert value to number if it's string
    let minutes: number | string = Math.floor(sec / 60); // get minutes
    let seconds: number | string = sec - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  };

  return (
    <StyledTimer>
      Time <span ref={time}>{convertToMS(duration)}</span> minutes!
    </StyledTimer>
  );
};

export const StyledTimer = styled.div`
  font-weight: bold;
`;

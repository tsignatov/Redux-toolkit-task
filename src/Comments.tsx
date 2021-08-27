import React, { FC } from "react";
import styled from "styled-components";
import { Comment } from "reducers/CommentsSlice";

interface Props {
  comments: Array<Comment>;
  counter: number;
}

export const Comments: FC<Props> = ({ comments, counter }) => {
  return (
    <div>
      {comments.map((comment: Comment, index: number) => {
        return (
          <StyledComment
            fontWeight={`${
              comments.length - counter <= index ? "bold" : "normal"
            }`}
            key={index}
          >
            Name: <span key={index}>{comment.name}</span>
          </StyledComment>
        );
      })}
    </div>
  );
};

export const StyledComment = styled.div<{ fontWeight: string }>`
  font-weight: ${({ fontWeight }) => fontWeight};
`;

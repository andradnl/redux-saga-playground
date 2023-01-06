import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPost, selectPosts } from "../redux/posts/slice";

interface CardProps {
  bgColor?: string;
  id: string;
  body?: string;
}

const Card = ({ bgColor, id, body }: CardProps) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(getPost(id))}
      style={{
        background: bgColor,
        width: 150,
        height: 150,
        borderRadius: 16,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 8,
        cursor: "pointer",
      }}
    >
      <span
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "right",
        }}
      >
        {body}
      </span>
    </div>
  );
};

export const TakeLeadingExample = () => {
  const {
    posts: { selectedPost },
  } = useSelector(selectPosts);

  const getBody = (id: number) =>
    selectedPost.id === id
      ? selectedPost.body.slice(0, 90).concat("...")
      : `Post ${id}`;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      {[1, 2, 3, 4].map((id: number) => {
        const isSelected = selectedPost.id === id;
        return (
          <Card
            bgColor={isSelected ? "forestgreen" : "darkgrey"}
            id={`${id}`}
            body={getBody(id)}
          />
        );
      })}
    </div>
  );
};

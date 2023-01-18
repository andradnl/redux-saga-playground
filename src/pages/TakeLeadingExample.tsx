import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { getPost, selectPosts } from "../redux/posts/slice";

interface CardProps {
  bgColor?: string;
  id: string;
  body?: string;
}

export const TakeLeadingExample = () => {
  const { selectedPost } = useSelector(selectPosts);

  const getBody = (id: number) =>
    selectedPost.id === id
      ? selectedPost.body.slice(0, 90).concat("...")
      : `Post ${id}`;

  const [showObservations, setShowObservations] = React.useState(false);

  return (
    <>
      <NavigationBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          <h1>takeLeading</h1>
          <Button
            label={`${showObservations ? "Hide" : "Show"} observations`}
            onClick={() => setShowObservations(!showObservations)}
          />
        </div>
        {showObservations && <ObservationsSection />}
        {[1, 2, 3, 4].map((id: number) => {
          const isSelected = selectedPost.id === id;
          return (
            <Card
              key={id}
              bgColor={isSelected ? "forestgreen" : "darkgrey"}
              id={`${id}`}
              body={getBody(id)}
            />
          );
        })}
      </div>
    </>
  );
};

const ObservationsSection = () => (
  <div
    style={{
      borderRadius: 8,
      border: "1px solid lightgrey",
      width: "100%",
      padding: 16,
    }}
  >
    <p>
      We can dispatch multiple actions of the same type (or different) in rapid
      succession, but the saga that fetches data execute only in response to the
      first action. As such, only one API request is made, and only after the
      saga has finished its execution, will it handle any other subsequent
      actions.
    </p>
  </div>
);

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

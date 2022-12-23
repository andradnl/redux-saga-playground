import * as React from "react";

interface CardProps {
  title: string;
  titleBackground: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, titleBackground, children } = props;
  return (
    <div
      style={{
        borderRadius: 8,
        border: "1px solid lightgrey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "6px 6px 0 0",
          background: titleBackground,
        }}
      >
        <p>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

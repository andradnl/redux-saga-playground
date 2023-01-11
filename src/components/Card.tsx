import * as React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, children } = props;
  return (
    <div className="card-large">
      <div className="card-large-title">
        <h2>{title}</h2>
      </div>
      <div className="card-large-content">{children}</div>
    </div>
  );
};

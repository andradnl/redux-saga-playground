import * as React from "react";
import { Link } from "react-router-dom";

interface HomeCardProps {
  title: string;
  pageToNavigate?: string;
}

export const HomeCard = ({ pageToNavigate, title }: HomeCardProps) => (
  <Link to={pageToNavigate ?? ""}>
    <div className="card-small">
      <span>{title}</span>
    </div>
  </Link>
);

const cards = [
  { title: "Frequently Asked Questions", page: "/faq" },
  { title: "takeEvery vs. takeLatest", page: "/examples/every-latest" },
  { title: "takeLeading", page: "/examples/take-leading" },
  { title: "fork", page: "/examples/fork" },
];

export const Home = () => {
  return (
    <div className="page-container">
      {cards.map(({ title, page }) => (
        <HomeCard title={title} pageToNavigate={page} />
      ))}
    </div>
  );
};

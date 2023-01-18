import * as React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavCardProps {
  title: string;
  pageToNavigate?: string;
  externalLink?: string;
}

const NavCard = (props: NavCardProps) => {
  const { pageToNavigate, title, externalLink = "" } = props;
  const location = useLocation();
  const currentPage = location.pathname;

  const className = `card-small ${
    currentPage === pageToNavigate && "card-small-active"
  }`;

  const handleExternalNav = () => {
    externalLink && window.open(externalLink);
  };

  return (
    <Link to={pageToNavigate ?? ""} onClick={handleExternalNav}>
      <div className={className}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

const cards = [
  {
    title: "Redux Saga docs 📚",
    externalLink: "https://redux-saga.js.org/docs/api",
  },
  { title: "Frequently Asked Questions", page: "/faq" },
  { title: "takeEvery vs. takeLatest", page: "/examples/every-latest" },
  { title: "takeLeading", page: "/examples/take-leading" },
  { title: "fork", page: "/examples/fork" },
];

export const NavigationBar = () => {
  return (
    <div className="navigation">
      {cards.map(({ title, page, externalLink }) => (
        <NavCard
          key={title}
          title={title}
          pageToNavigate={page}
          externalLink={externalLink}
        />
      ))}
    </div>
  );
};

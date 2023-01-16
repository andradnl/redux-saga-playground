import * as React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavCardProps {
  title: string;
  pageToNavigate?: string;
}

const NavCard = ({ pageToNavigate, title }: NavCardProps) => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <Link to={pageToNavigate ?? ""}>
      <div
        className={`card-small ${
          currentPage === pageToNavigate && "card-small-active"
        }`}
      >
        <span>{title}</span>
      </div>
    </Link>
  );
};

const cards = [
  { title: "Home", page: "/" },
  { title: "Frequently Asked Questions", page: "/faq" },
  { title: "takeEvery vs. takeLatest", page: "/examples/every-latest" },
  { title: "takeLeading", page: "/examples/take-leading" },
  { title: "fork", page: "/examples/fork" },
];

export const NavigationBar = () => {
  return (
    <div className="navigation">
      {cards.map(({ title, page }) => (
        <NavCard key={title} title={title} pageToNavigate={page} />
      ))}
    </div>
  );
};

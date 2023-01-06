import * as React from "react";
import { Link } from "react-router-dom";

interface HomeCardProps {
  title: string;
  id: string;
  bgColor: string;
  pageToNavigate?: string;
}

export const HomeCard = (props: HomeCardProps) => (
  <Link
    to={props.pageToNavigate ?? ""}
    style={{
      textDecoration: "none",
    }}
  >
    <div
      style={{
        background: props.bgColor,
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
        {props.title}
      </span>
    </div>
  </Link>
);

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <HomeCard
        title="Frequently Asked Questions"
        bgColor="darkgrey"
        id="home"
        pageToNavigate="/faq"
      />
      <HomeCard
        title="takeEvery vs. takeLatest"
        bgColor="salmon"
        id="take-every-take-latest"
        pageToNavigate="/examples/every-latest"
      />
      <HomeCard
        title="takeLeading"
        bgColor="skyblue"
        id="take"
        pageToNavigate="/examples/take-leading"
      />
      <HomeCard title="Placeholder 1" bgColor="darkgrey" id="p1" />
      <HomeCard title="Placeholder 2" bgColor="darkgrey" id="p2" />
      <HomeCard title="Placeholder 3" bgColor="darkgrey" id="p3" />
      <HomeCard title="Placeholder 4" bgColor="darkgrey" id="p4" />
    </div>
  );
};

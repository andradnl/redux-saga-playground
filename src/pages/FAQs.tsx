import * as React from "react";
import { useSelector } from "react-redux";
import { Button } from "../components/Button";

import { NavigationBar } from "../components/NavigationBar";
import { selectFaq, FAQ } from "../redux/faq/slice";

interface ItemProps {
  question: string;
  answer: string;
}

const Item = ({ question, answer }: ItemProps) => (
  <div
    style={{
      textAlign: "left",
      border: "1px solid lightgrey",
      padding: "0 16px",
    }}
  >
    <h5>{question}</h5>
    <h6>{answer}</h6>
  </div>
);

export const FAQs = () => {
  const { faqs } = useSelector(selectFaq);
  return (
    <div>
      <NavigationBar />
      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          padding: 16,
        }}
      >
        <input type="textarea" placeholder="What is your question?" />
        <input type="textarea" placeholder="What is your answer?" />
        <Button label="Add" onClick={() => {}} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {faqs.map((faq: FAQ) => (
          <Item question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

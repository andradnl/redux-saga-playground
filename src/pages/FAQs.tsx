import * as React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { selectFaq, FAQ, addFaq, deleteFaq } from "../redux/faq/slice";

interface ItemProps {
  question: string;
  answer: string;
  handleDelete: () => void;
}

const Item = ({ question, answer, handleDelete }: ItemProps) => (
  <div className="faq-item">
    <div className="faq-item-content">
      <h5>{question}</h5>
      <h6>{answer}</h6>
    </div>
    <div className="faq-item-buttons">
      <Button label="❌" onClick={handleDelete} />
    </div>
  </div>
);

export const FAQs = () => {
  const { faqs } = useSelector(selectFaq);
  const dispatch = useDispatch();

  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const handleAdd = () => {
    dispatch(addFaq({ question, answer, id: uuid() }));
    setQuestion("");
    setAnswer("");
  };

  const handleDelete = (id: string) => dispatch(deleteFaq(id));

  return (
    <div>
      <NavigationBar />
      <div className="faq-content">
        <input
          type="textarea"
          placeholder="What is your question?"
          value={question}
          onChange={(e) => setQuestion(e.currentTarget.value)}
        />
        <input
          type="textarea"
          placeholder="What is your answer?"
          value={answer}
          onChange={(e) => setAnswer(e.currentTarget.value)}
        />
        <Button label="Add" onClick={handleAdd} />
      </div>
      <div className="faq-list">
        {faqs.map((faq: FAQ) => (
          <Item
            key={faq.id}
            handleDelete={() => handleDelete(faq.id)}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

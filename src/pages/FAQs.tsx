import * as React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import {
  selectFaq,
  FAQ,
  addFaq,
  deleteFaq,
  updateFaq,
} from "../redux/faq/slice";

interface ItemProps {
  question: string;
  answer: string;
  id: string;
  handleUpdate: () => void;
  handleDelete: () => void;
}

const Item = ({
  question,
  answer,
  id,
  handleUpdate,
  handleDelete,
}: ItemProps) => {
  return (
    <div className="faq-item">
      <div>
        <h5>{question}</h5>
        <h6>{answer}</h6>
        <h6>ID: {id}</h6>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <Button label="📝" onClick={handleUpdate} />
        <Button label="❌" onClick={handleDelete} />
      </div>
    </div>
  );
};

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

  const handleUpdate = (payload: FAQ) => {};
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
        {faqs.map((faq: FAQ) => {
          return (
            <Item
              handleUpdate={() =>
                handleUpdate({ id: faq.id, question, answer })
              }
              handleDelete={() => handleDelete(faq.id)}
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

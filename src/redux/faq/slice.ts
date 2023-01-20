import { createSlice } from "@reduxjs/toolkit";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs = [
  {
    id: "faq_1",
    question: "What is Redux Saga?",
    answer:
      "Redux Saga is a JS library built on top of Redux, which handles asynchronous operations like data fetching",
  },
  {
    id: "faq_2",
    question: "What are Redux Saga effects?",
    answer:
      "Effects or effect creators are functions you can execute as part of a Redux Saga control flow, which return plain JavaScript objects and trigger side effects. They do not perform any action, but instead instruct the middleware how to execute a given action.",
  },
  {
    id: "faq_3",
    question: "What are declarative effects?",
    answer:
      "Declarative effects are objects yielded within the saga by calling effect creators. These objects contain the description of an action that is to be executed by the middleware.",
  },
];

const initialState = {
  faqs,
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    addFaq: (state, action) => ({
      ...state,
      faqs: state.faqs.concat(action.payload),
    }),
    deleteFaq: (state, action) => ({
      ...state,
      faqs: state.faqs.filter((faq) => {
        return faq.id !== action.payload;
      }),
    }),
  },
});

export const { addFaq, deleteFaq } = faqSlice.actions;

export const selectFaq = (state: any) => state.faq; 

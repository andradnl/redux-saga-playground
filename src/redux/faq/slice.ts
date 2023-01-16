import { createSlice } from "@reduxjs/toolkit";

export interface FAQ {
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "What is Redux Saga?",
    answer:
      "Redux Saga is a JS library built on top of Redux, which handles asynchronous operations like data fetching",
  },
  {
    question: "What are Redux Saga effects?",
    answer:
      "Effects or effect creators are functions you can execute as part of a Redux Saga control flow, which return plain JavaScript objects and trigger side effects. They do not perform any action, but instead instruct the middleware how to execute a given action.",
  },
  {
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
    addFaq: (state, action) => {
      state.faqs = state.faqs.concat(action.payload);
    },
    updateFaq: () => {},
    deleteFaq: () => {},
  },
});

export const { addFaq, updateFaq, deleteFaq } = faqSlice.actions;

export const selectFaq = (state: any) => state.faq; 

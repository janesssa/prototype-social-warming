import React, { useState, useEffect, useRef, createRef } from "react";

const questions = [
  {
    question: "Question 1",
    answers: ["Answer One", "Answer Two", "Answer Three"],
  },
  {
    question: "Question 2",
    answers: ["Answer One", "Answer Two", "Answer Three", "Answer Four"],
  },
  {
    question: "Question 3",
    answers: [
      "Answer One",
      "Answer Two",
      "Answer Three",
      "Answer Four",
      "Answer Five",
    ],
  },
];

const answers = [
  "Answer One",
  "Answer Two",
  "Answer Three",
  "Answer Four",
  "Answer Five",
];

export const Question = () => {
  const refs = useRef(answers.map(() => createRef()));

  console.log(refs);
  return questions.map(({question, answers}) => (
    <div>
      <h1>{question}</h1>
      {answers.map((answer, index) => (
        <p ref={refs.current[index]}>{answer}</p>
      ))}
    </div>
  ));
};

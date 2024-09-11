// context/QuizContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const QuizContext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    // Add more questions as needed
  ];

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const selectOption = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
    nextQuestion();
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        score,
        questions,
        nextQuestion,
        selectOption,
        totalQuestions: questions.length
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook for using the context
export const useQuiz = () => useContext(QuizContext);
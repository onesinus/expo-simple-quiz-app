import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const QuizContext = createContext();

// Create a provider component
export const Quiz2Provider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        const data = await response.json();
        if (data.response_code === 0) {
          // Format the questions to match your app's needs
          const formattedQuestions = data.results.map((item) => ({
            question: item.question,
            options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
            answer: item.correct_answer,
          }));
          setQuestions(formattedQuestions);
        } else {
          setError('Failed to fetch questions');
        }
      } catch (err) {
        setError('An error occurred while fetching questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const selectOption = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
    nextQuestion();
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  }

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        score,
        questions,
        loading,
        error,
        nextQuestion,
        selectOption,
        totalQuestions: questions.length,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook for using the context
export const useQuiz2 = () => useContext(QuizContext);

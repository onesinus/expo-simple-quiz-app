// screens/QuestionScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useQuiz } from '../../context/QuizContext';
import ScoreScreen from '@/components/ScoreView';

const QuestionScreen = () => {
  const { 
    currentQuestionIndex, 
    questions, 
    selectOption 
} = useQuiz();
  const question = questions[currentQuestionIndex];

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Quiz Completed!</Text>
        <ScoreScreen quiz_model="1" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => selectOption(option)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
  },
});

export default QuestionScreen;

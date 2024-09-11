import React from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuiz2 } from '../../context/QuizFromApiContext';
import ScoreScreen from '@/components/ScoreView';

const QuestionScreen2 = () => {
  const { currentQuestionIndex, questions, selectOption, loading, error, totalQuestions } = useQuiz2();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: {error}</Text>
      </View>
    );
  }

  if (currentQuestionIndex >= totalQuestions) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Quiz Completed!</Text>
        <ScoreScreen quiz_model="2" />
      </View>
    );
  }

  const question = questions[currentQuestionIndex];

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

export default QuestionScreen2;

// screens/ScoreScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useQuiz } from '../context/QuizContext';
import { useQuiz2 } from '../context/QuizFromApiContext';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';

const ScoreScreen = (props) => {
     if (props.quiz_model == "1") {        
         const { score, totalQuestions, resetQuiz } = useQuiz();
       
         return (
           <View>
             <Text style={styles.text}>You scored {score} out of {totalQuestions}!</Text>
               <Button
                 key={"btn-reset-quiz"}
                 title={"Reset Quiz"}
                 onPress={() => resetQuiz()}
               />
           </View>
         );
     } else if (props.quiz_model == "2") {
        const { score, totalQuestions, resetQuiz } = useQuiz2();
       
        return (
          <View>
            <Text style={styles.text}>You scored {score} out of {totalQuestions}!</Text>
              <Button
                key={"btn-reset-quiz"}
                title={"Reset Quiz"}
                onPress={() => resetQuiz()}
              />
          </View>
        );
     } else {
        return "<div></div>"
     }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },  
});

export default ScoreScreen;

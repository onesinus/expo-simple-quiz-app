import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { QuizProvider } from '../../context/QuizContext';
import { Quiz2Provider } from '../../context/QuizFromApiContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <QuizProvider>
      <Quiz2Provider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="quiz"
            options={{
              title: 'Quiz',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} />
              ),
            }}
          />      
          <Tabs.Screen
            name="quiz2"
            options={{
              title: 'Quiz 2',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} />
              ),
            }}
          />      

        </Tabs>
      </Quiz2Provider>
    </QuizProvider>
  );
}

import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue', tabBarLabelStyle: { fontSize: 14 }, }} initialRouteName='index'>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
      }} />
      <Tabs.Screen name="favorate" options={{ title: 'Favorate', tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} /> }} />
      <Tabs.Screen name="inbox" options={{ title: 'Inbox', tabBarIcon: ({ color }) => <Ionicons name="chatbox" size={24} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
    </Tabs>
  )
}

export default _layout
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }} initialRouteName='index'>
      <Tabs.Screen name='index' />
      <Tabs.Screen name="favorate" />
      <Tabs.Screen name="inbox" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}

export default _layout
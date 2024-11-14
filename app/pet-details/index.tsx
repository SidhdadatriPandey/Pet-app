import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const index = () => {
    // console.log('pet',pet)
    const pet=useLocalSearchParams();
    const navigation=useNavigation()
      console.log('pet',pet)
    useEffect(()=>{
        navigation.setOptions({
            headerTransparent:true,
            headerTitle:''
        })
    },[])
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default index
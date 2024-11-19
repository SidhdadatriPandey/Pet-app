import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import PetSubInfo from '@/components/PetDetails/PetSubInfo';

const PetInfo = () => {
  const pet = useLocalSearchParams();
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])
  return (
    <View>
      <PetInfo pet={pet} />
      <PetSubInfo />
    </View>
  )
}

export default PetInfo
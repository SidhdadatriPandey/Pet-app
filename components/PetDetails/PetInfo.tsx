import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const PetInfo = ({ pet }: any) => {
    // console.log('pet', pet)


    // console.log('pet', JSON.stringify(pet))
    return (
        <View>
            <Image source={{ uri: pet.imageUrl }} style={{ height: 300, width: '100%' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 25 }}>{pet?.name}</Text>
                <AntDesign name="hearto" size={24} color="black" />
            </View>
        </View>
    )
}

export default PetInfo
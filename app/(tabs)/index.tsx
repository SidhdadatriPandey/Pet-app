import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { useUser } from '@clerk/clerk-expo';

const Home = () => {

    return (
        <View>
            <Header />
        </View>
    )
}


export default Home
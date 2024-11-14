import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { useUser } from '@clerk/clerk-expo';
import Slider from '@/components/Slider';
import PetListByCategory from '@/components/PetListByCategory';
import CustomHeader from '@/components/CustomHeader';

const Home = () => {

    return (
        <CustomHeader>
            {/* <View style={{gap:20,paddingBottom:320}}>
                <Header />
                <Slider />
                <PetListByCategory />
            </View> */}
            <PetListByCategory/>
       </CustomHeader>
    )
}

export default Home
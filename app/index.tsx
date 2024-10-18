import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Link, Redirect, router, useRootNavigationState } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { useUser } from '@clerk/clerk-expo'

const index = () => {
    const { user } = useUser();
    // console.log('user', user);

    if (user) return <Redirect href={'/(tabs)'} />
    return <Redirect href={'/login'} />


}


export default index
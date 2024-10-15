import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Link, Redirect, router, useRootNavigationState } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { useUser } from '@clerk/clerk-expo'

const index = () => {
    const { user } = useUser();
    console.log('user', user);
    const rootNavigationStack = useRootNavigationState();
    // useEffect(() => {
    //     checkNavigated();
    // }, [])

    // const checkNavigated = () => {
    //     // if (!rootNavigationStack.key) { return null }
    //     if (!rootNavigationStack || !rootNavigationStack.key) {
    //         return null;
    //     }
    // }
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                user ? <Redirect href={'/(tabs)'} /> :
                    <Redirect href={'/login'} />
            }
        </View>
    )
}


export default index
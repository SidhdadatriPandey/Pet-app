import { View, Text } from 'react-native'
import React, { Children } from 'react'

const SafeArea = ({ children }: any) => {
    return (
        <View style={{ padding: 8, paddingTop: 50 }}>
            {children}
        </View>
    )
}

export default SafeArea
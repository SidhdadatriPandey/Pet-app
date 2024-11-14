import { View, Text } from 'react-native'
import React from 'react'

const CustomHeader = (props:any) => {
  return (
    <View style={{padding:10,paddingTop:0,flex: 1}}>
        {props.children}
    </View>
  )
}

export default CustomHeader
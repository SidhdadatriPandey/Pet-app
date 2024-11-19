// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const PetListItem = ({pet}:any) => {
//     console.log('petdata',pet);

//   return (
//     <View style={{width:180,alignItems:'center',backgroundColor:'red',borderRadius:15}}>
//       <Image source={{uri:pet.imageUrl}} 
//       style={{height:130,width:'100%',resizeMode:'stretch',borderRadius:15}} />
//       <Text>{pet.name}</Text>
//       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//         <Text>{pet.breed}</Text>
//         <Text>{pet.age} YRS</Text>
//       </View>
//     </View>
//   )
// }

// export default PetListItem

import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { router } from 'expo-router';

const PetListItem = ({ pet }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: '/pet-details',
          params: pet
        })
      }}
      style={{
        width: '47%',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: wp('4%'),
        padding: hp('1%'),
        margin: wp('2%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}>
      <Image
        source={{ uri: pet.imageUrl }}
        style={{
          height: hp('20%'),
          width: '100%',
          resizeMode: 'stretch',
          borderRadius: wp('4%'),
        }}
      />
      <Text style={{
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
        marginVertical: hp('1%'),
        color: '#333',
      }}>
        {pet.name}
      </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: wp('2%'),
      }}>
        <Text style={{
          fontSize: wp('3.5%'),
          color: '#555',
        }}>
          {pet.breed}
        </Text>
        <Text style={{
          fontSize: wp('3.5%'),
          color: '#555',
        }}>
          {pet.age} YRS
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PetListItem;

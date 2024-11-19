import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/config/FirebaseConfig'
import PetListItem from './PetListItem'
import Header from './Header'
import Slider from './Slider'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PetListByCategory = () => {
  const [aa, setaa] = useState<any>([])
  useEffect(() => {
    getPetList('Dogs');
  }, [])

  const [petList, setPetList] = useState<any[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const getPetList = async (category: string) => {
    setLoader(true);
    let re = ["fdy", "dt"] as any
    setPetList([]);
    const q = query(collection(db, 'Pets'), where('category', '==', category))
    const querySnapshot = await getDocs(q);
    // console.log("query",querySnapshot)
    querySnapshot.forEach((doc: any) => {
      setPetList((prev) => [...prev, doc.data()])
    })
    setLoader(false);
  }

  console.log('array data', petList.length)
  const renderFooter = () => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD700', // a softer gold color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      <MaterialIcons name="pets" size={24} color="black" style={{ marginRight: 10 }} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Add New Pet</Text>
    </TouchableOpacity>

  )
  return (
    <View style={{}}>
      {/* <Category cate={(value:string)=>getPetList(value)} /> */}
      <FlatList
        contentContainerStyle={{ justifyContent: 'space-between', width: '100%', marginTop: 0, }}
        data={petList}
        numColumns={2}
        // refreshing={false}
        // onRefresh={() => getPetList('Dogs')}
        showsVerticalScrollIndicator={false}
        // horizontal={true}
        renderItem={({ item, index }) => (
          <PetListItem pet={item} key={index} />
        )}
        ListHeaderComponent={
          <View style={{ gap: 25 }}>
            <Header />
            <Slider />
            <Category cate={(value: string) => getPetList(value)} />
          </View>
        }
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

export default PetListByCategory
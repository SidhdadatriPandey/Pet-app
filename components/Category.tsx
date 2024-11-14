import { View, Text, TouchableOpacity, FlatList, Image, Touchable, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/FirebaseConfig';

interface CategoryItem {
  name: string;
  imageUrl: string;
}

interface abc {
  itm: CategoryItem[]
}
const Category = ({cate = (e: string) => {}}) => {
  const [activeCategory, setActiveCategory] = useState<String>('Dogs')
  const [category, setCategory] = useState<CategoryItem[]>([]);
  useEffect(() => {
    getCategories();
  }, [])

  async function getCategories() {
    setCategory([])
    const snapshot = await getDocs(collection(db, "DogCategory"));
    snapshot.forEach((doc) => {
      // console.log('dog categoruy',doc.data());
      setCategory((prev: any) => [...prev, doc.data()]);
    })

  }
  // console.log('category data22 ',category.length);
  return (
    <View>
      {
        <View>
          <FlatList
            data={category}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ justifyContent: 'space-between',  }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => {setActiveCategory(item.name)
                cate(item.name)
              }}>
                <View style={{backgroundColor: activeCategory === item.name ? 'red' : 'white', padding: 4 }}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ width: 85, height: 100,}}
                    key={index}
                  />
                  <Text style={{ textAlign: 'center' }}>{item.name}</Text>
                </View>
              </Pressable>
            )}
          />

        </View>
      }
    </View>
  )
}

export default Category
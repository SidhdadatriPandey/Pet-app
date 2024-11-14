// import { View, Text, FlatList, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { collection, getDocs } from 'firebase/firestore'
// import { db } from '@/config/FirebaseConfig'

// const Slider = () => {
//     // const db=app
//     const [sliderImage,setSliderImage]=useState([]);
//     useEffect(()=>{
//         GetSlider();
//     },[])
//     const GetSlider=async ()=>{
//         const snapshot=await getDocs(collection(db,'Sliders'));
//         snapshot.forEach((doc:any)=>{
//             // console.log(doc.data());
//             setSliderImage(doc.data());
//         })
//     }
//   return (
//     <View>
//       {/* <Text>Slider</Text> */}
//       <FlatList 
//       data={sliderImage}
//       renderItem={({item,index}:any)=>(
//         <Image source={{uri:item.imageUrl}} 
//           style={{height:100,width:300}}
//         />
//       )} />
//     </View>
//   )
// }

// export default Slider


import { View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/FirebaseConfig';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// Initialize Firebase Analytics if supported
// s
interface SliderImage {
  imageUrl: string;
  name?: string; // Add optional properties as per your document structure
}

const Slider = () => {
  const [sliderImages, setSliderImages] = useState<any[]>([]);

  useEffect(() => {
    const getSliderImages = async () => {
      const snapshot = await getDocs(collection(db, 'Sliders'));
      const imagesArray: SliderImage[] = snapshot.docs.map((doc) => doc.data() as SliderImage);
      setSliderImages(imagesArray);
    };
    getSliderImages();
  }, []);

  return (
    <View style={{}}>
      <FlatList
        data={sliderImages}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{gap:15}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item,index }:any) => (
          <Image key={index} source={{ uri: item.imageUrl }} style={{ height: 200, width: 300 }} />
        )}
      />
    </View>
  );
};

export default Slider;


// import { View, Text } from 'react-native'
// import React from 'react'
// import SafeArea from './SafeArea'
// import { useUser } from '@clerk/clerk-expo'

// const Header = () => {
//     const { user } = useUser();
//     // console.log(user);
//     console.log('user', user);
//     return (
//         <SafeArea>
//             <View>
//                 <Text>Headeraaaaaaaaaa</Text>
//                 <Text>{user?.fullName}</Text>
//             </View>
//         </SafeArea>

//     )
// }

// export default Header

// import { View, Text, Image } from 'react-native';
// import React from 'react';
// import SafeArea from './SafeArea';
// import { useUser } from '@clerk/clerk-expo';

// const Header = () => {
//     const { isLoaded, user } = useUser();
//     return (
//         <SafeArea>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View>
//                     <Text>Welcome</Text>
//                     <Text>{user?.fullName || 'Guest'}</Text>
//                 </View>
//                 <View>
//                     <Image source={{ uri: user?.imageUrl }}
//                         style={{ height: 40, width: 40, borderRadius: 100 }}
//                     />
//                 </View>
//             </View>
//         </SafeArea>
//     );
// }

// export default Header;


import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import SafeArea from './SafeArea';
import { useUser } from '@clerk/clerk-expo';

const Header = () => {
    const { isLoaded, user } = useUser();

    return (
        <SafeArea>
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.userName}>{user?.fullName || 'Guest'}</Text>
                </View>
                {user?.imageUrl && (
                    <Image
                        source={{ uri: user.imageUrl }}
                        style={styles.profileImage}
                    />
                )}
            </View>
        </SafeArea>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 16,
        backgroundColor: '#f5f5f5', // Example background color
    },
    welcomeText: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 16,
        color: '#555',
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20, // Half of the height and width for a circle
    },
});

export default Header;

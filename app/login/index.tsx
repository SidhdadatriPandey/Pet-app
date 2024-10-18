import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useCallback } from 'react';
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
const { width, height } = Dimensions.get('window');


const LoginScreen = () => {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL('/(tabs)', { scheme: 'myapp' }),
            })

            if (createdSessionId) {
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error('OAuth error', err)
        }
    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/login.jpeg')}
                resizeMode='cover'
                style={styles.image}
            />
            <Text style={styles.heading}>Ready to make a new friend?</Text>
            <Text style={styles.subHeading}>
                Let's adopt the pet you like and make their life happy again.
            </Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
};
export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        // Warm up the android browser to improve UX
        // https://docs.expo.dev/guides/authentication/#improving-user-experience
        void WebBrowser.warmUpAsync()
        return () => {
            void WebBrowser.coolDownAsync()
        }
    }, [])
}
WebBrowser.maybeCompleteAuthSession()
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#fff',
    },
    image: {
        width: width * 1,
        height: height * 0.6,
        borderRadius: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    subHeading: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        padding: 10
    },
    button: {
        backgroundColor: '#fbbf24',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LoginScreen;

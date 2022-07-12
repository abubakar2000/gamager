import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Register from './authcomponents/Register'
import NewsComponent from './news/NewsComponent'
import Login from './authcomponents/Login'

const AuthScreen = ({ navigation }: any) => {
    const [scrollViewRef, setScrollViewRef] = useState(null)
    return (
        <ImageBackground
            source={require('../../assets/images/bg_wave.png')}
            style={{ height: "100%", width: '100%' }} >
            <ScrollView
                ref={(ref) => {
                    setScrollViewRef(ref as any)
                }}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
            >
                <NewsComponent />
                <Login
                    navigation={navigation}
                    onScrollHandler={ScrollHandler(2)}
                />
                <Register
                    navigation={navigation}
                    onScrollHandler={ScrollHandler(1)}
                />
            </ScrollView>
        </ImageBackground>
    )

    function ScrollHandler(index: number): any {
        return () => {
            (scrollViewRef as any).scrollTo({
                x: index * Dimensions.get('screen').width,
                y: 0,
                animated: true,
            })
        }
    }
}

export default AuthScreen

const styles = StyleSheet.create({})
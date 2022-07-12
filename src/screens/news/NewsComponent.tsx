import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('screen')

const NewsComponent = () => {
    return (
        <ScrollView style={{
            width: width, height: "100%",
            padding: 10,
        }}
            contentContainerStyle={{ justifyContent: 'center', height: '100%' }}>
            <Text
                style={{ color: "white", fontSize: 40, margin: 10, fontWeight: 'bold',textAlign:'left' }}>
                Event Updates
            </Text>
            <View
                style={{
                    width: "100%", minHeight: height / 1.5,
                    backgroundColor: "rgba(0, 0, 0,0.6)",
                    borderRadius: 10
                }}
            >
            </View>
        </ScrollView>
    )
}

export default NewsComponent

const styles = StyleSheet.create({})
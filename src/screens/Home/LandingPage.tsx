import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import app from '../../../app.json';

const LandingPage = (
    {
        navigation
    }:
        {
            navigation: any
        }) => {
    return (
        <View style={styles.HomeContainer}>
            {/* First row text */}
            <View style={styles.RowContainer}>
                <Text style={styles.SectionTitleH1}>
                    {app.displayName}
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.ProfileCircle}>
                </TouchableOpacity>
            </View>

            {/* Second row text */}
            <View style={styles.RowContainer}>
                <Text style={styles.SectionTitleH2}>Your friends are playing</Text>
            </View>
            <View style={styles.RowContainer}>
                <Text style={styles.SectionTitleH2Subtitle}>Play Same game as your friends and have fun</Text>
            </View>

            <ScrollView horizontal
                style={{ marginTop: 20, }}>
                <View style={{
                    backgroundColor: 'red',
                    height: 150, width: 130,
                    borderRadius: 10,
                    shadowColor:'red',
                    shadowOffset:{height:0,width:0},
                    shadowOpacity:1,
                    shadowRadius:10,
                    margin:10,
                }} />
            </ScrollView>


        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    HomeContainer: {
        backgroundColor: 'rgb(0,0,0)',
        height: '100%',
        padding: 10
    },
    RowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SectionTitleH1: {
        color: 'white',
        textTransform: 'capitalize',
        fontSize: 30,
        fontWeight: 'bold',
    },
    SectionTitleH2: {
        color: 'white',
        fontSize: 25,
        fontWeight: '400',
        marginTop: 15,
    },
    SectionTitleH2Subtitle: {
        color: 'rgb(220,220,220)',
        fontSize: 15,
        fontWeight: '400',
    },
    ProfileCircle: {
        height: 50, width: 50, borderRadius: 25,
        backgroundColor: 'rgb(74, 67, 233)'
    },
})
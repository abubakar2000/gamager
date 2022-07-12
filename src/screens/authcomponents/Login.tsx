import { Text, StyleSheet, View, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('screen')

const Login = (
    {
        onScrollHandler,
        navigation
    }:
        {
            onScrollHandler: any,
            navigation: any
        }) => {

    const onPressSignIn = () => {
        navigation.navigate("Home")
    }
    return (
        <ScrollView
            style={styles.ScrollView}
            contentContainerStyle={styles.ScrollViewContainer}>
            <Text
                style={styles.FormTitle}>
                Login
            </Text>
            <View
                style={styles.FormContainer}
            >
                <TextInput
                    style={styles.InputField}
                    placeholderTextColor={'gray'}
                    returnKeyType="next"
                    placeholder={'Enter Email'}
                />
                <TextInput
                    style={styles.InputField}
                    placeholderTextColor={'gray'}
                    secureTextEntry
                    returnKeyType="done"
                    placeholder={'Enter Password'}
                />
                <View style={styles.RowButtonGroup}>
                    <TouchableOpacity
                        onPress={onScrollHandler}
                        style={styles.BlueButtonOutlined}>
                        <Text style={styles.BlueButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPressSignIn}
                        style={styles.BlueButton}>
                        <Text style={styles.BlueButtonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ForgotPasswordContainer}>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Text style={styles.ForgotPasswordText}>
                            Forgot your Password
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.OrTextStyle}>OR</Text>
                <TouchableOpacity style={styles.ThirdPartyLoginButtons}>
                    <Text style={styles.ThirdPartyButtonText}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ThirdPartyLoginButtons}>
                    <Text style={styles.ThirdPartyButtonText}>Sign in with Apple</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    InputField: {
        borderColor: 'white', borderWidth: 1,
        borderRadius: 10, paddingLeft: 20, fontSize: 16,
        margin: 10, height: 50, justifyContent: 'center'
    },
    BlueButton: {
        backgroundColor: 'rgba(0,100,255,0.9)',
        borderRadius: 10,
        margin: 10, height: 50, justifyContent: 'center',
        alignItems: 'center', flex: 1
    },
    BlueButtonOutlined: {
        borderColor: 'rgba(0,100,255,0.9)',
        borderWidth: 3,
        borderRadius: 10,
        margin: 10, height: 50, justifyContent: 'center',
        alignItems: 'center', flex: 1
    },
    BlueButtonText: { color: 'white', fontSize: 16, },
    FormContainer: {
        width: "100%", minHeight: height / 2,
        backgroundColor: "rgba(0, 0, 0,0.8)",
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-evenly',
        elevation: 10,
        shadowColor: 'gray',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
    },
    FormTitle: {
        color: "white", fontSize: 40,
        margin: 10, fontWeight: 'bold', textAlign: 'right'
    },
    ScrollView: {
        width: width, height: "100%",
        padding: 10,
    },
    ScrollViewContainer: { justifyContent: 'center', height: '100%' },
    ThirdPartyLoginButtons: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10,
        margin: 10, height: 50, justifyContent: 'center',
        alignItems: 'center'
    },
    ThirdPartyButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ForgotPasswordContainer: { flexDirection: 'row', margin: 10 },
    ForgotPasswordText: {
        color: 'rgb(0,100,255)', fontSize: 17,
    },
    OrTextStyle: { color: 'white', alignSelf: 'center', margin: 10 },
    RowButtonGroup: { flexDirection: 'row' },
})
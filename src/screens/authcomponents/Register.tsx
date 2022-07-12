import { View, StyleSheet, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('screen')

const Register = ({
    onScrollHandler,
    navigation
}:
    {
        onScrollHandler: any,
        navigation: any
    }) => {
    const onPressRegister = () => {
        navigation.push("Home")
    }
    return (
        <ScrollView style={styles.ScrollView}
            contentContainerStyle={styles.ScrollViewContainer}>
            <KeyboardAvoidingView behavior='position'>
                <Text
                    style={styles.FormTitle}>
                    Sign Up
                </Text>
                <View
                    style={styles.FormContainer}
                >
                    <TextInput
                        style={styles.InputField}
                        placeholderTextColor={'gray'}
                        returnKeyLabel='Next'
                        returnKeyType="next"
                        placeholder={'Enter Full Name'}
                    />
                    <TextInput
                        style={styles.InputField}
                        placeholderTextColor={'gray'}
                        keyboardType='phone-pad'
                        returnKeyLabel='Next'
                        returnKeyType="next"
                        placeholder={'Enter Telephone'}
                    />
                    <TextInput
                        style={styles.InputField}
                        placeholderTextColor={'gray'}
                        keyboardType='number-pad'
                        returnKeyLabel='Next'
                        returnKeyType="next"
                        placeholder={'Enter your age'}
                    />
                    <TextInput
                        style={styles.InputField}
                        placeholderTextColor={'gray'}
                        keyboardType='email-address'
                        returnKeyLabel='Next'
                        returnKeyType="next"
                        placeholder={'Enter Email'}
                    />
                    <TextInput
                        style={styles.InputField}
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        returnKeyLabel='Next'
                        returnKeyType="next"
                        placeholder={'Enter Password'}
                    />
                    <TextInput
                        style={styles.InputField}
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        returnKeyLabel='Next'
                        returnKeyType="done"
                        placeholder={'Confirm Password'}
                    />
                    <View style={styles.RowButtonGroup}>
                        <TouchableOpacity
                            onPress={onScrollHandler}
                            style={styles.BlueButtonOutlined}>
                            <Text style={styles.BlueButtonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onPressRegister}
                            style={styles.BlueButton}>
                            <Text style={styles.BlueButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.OrTextStyle}>OR</Text>
                    <TouchableOpacity style={styles.ThirdPartyLoginButtons}>
                        <Text style={styles.ThirdPartyButtonText}>Sign up with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ThirdPartyLoginButtons}>
                        <Text style={styles.ThirdPartyButtonText}>Sign up with Apple</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    InputField: {
        borderColor: 'white', borderWidth: 1,
        borderRadius: 10, paddingLeft: 20, fontSize: 16,
        marginLeft: 10, marginRight: 10,
        marginBottom: 10,
        height: 50, justifyContent: 'center'
    },
    BlueButton: {
        backgroundColor: 'rgba(0,100,255,0.9)',
        borderRadius: 10,
        marginLeft: 10, marginRight: 10,
        marginBottom: 10, height: 50, justifyContent: 'center',
        alignItems: 'center', flex: 1
    },
    BlueButtonOutlined: {
        borderColor: 'rgba(0,100,255,0.9)',
        borderWidth: 3,
        borderRadius: 10,
        marginLeft: 10, marginRight: 10,
        marginBottom: 10, height: 50, justifyContent: 'center',
        alignItems: 'center', flex: 1
    },
    BlueButtonText: { color: 'white', fontSize: 16 },
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
        margin: 10, fontWeight: 'bold', textAlign: 'left'
    },
    ScrollView: {
        width: width, height: "100%",
        padding: 10,
    },
    ScrollViewContainer: { justifyContent: 'center', height: '100%' },
    ThirdPartyLoginButtons: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10,
        marginLeft: 10, marginRight: 10,
        marginBottom: 10, height: 50, justifyContent: 'center',
        alignItems: 'center'
    },
    ThirdPartyButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    OrTextStyle: {
        color: 'white', alignSelf: 'center', marginLeft: 10, marginRight: 10,
        marginBottom: 10,
    },
    RowButtonGroup: { flexDirection: 'row' },
})
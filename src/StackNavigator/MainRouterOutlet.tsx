import { StyleSheet,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen'
import LandingPage from '../screens/Home/LandingPage'
const Stack = createNativeStackNavigator()
const MainRouterOutlet = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom',
            }}>
                <Stack.Screen name='Auth' component={AuthScreen} />
                <Stack.Screen name='Home' component={LandingPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRouterOutlet

const styles = StyleSheet.create({})
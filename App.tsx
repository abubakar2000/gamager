import { Text, StyleSheet, View, SafeAreaView, Button } from 'react-native'
import React, { Component } from 'react'
import MainRouterOutlet from './src/StackNavigator/MainRouterOutlet'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={styles.container}>
        <MainRouterOutlet />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: { height: '100%', width: '100%', backgroundColor: 'black',overflow:'hidden' },
})
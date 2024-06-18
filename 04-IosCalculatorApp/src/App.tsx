import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CalculatorScreen } from './presentation/screens/CalculatorScreen'
import { StatusBar } from 'react-native'
import { global_styles } from './config/theme/app-theme'

export default function App() {
  return (
    <View style={global_styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />

      <CalculatorScreen />
    </View>
  )
}


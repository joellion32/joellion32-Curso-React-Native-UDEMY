import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { global_styles, colors } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {
    const {
        number,
        prevNumber,
        buildNumber,
        clean,
        toogleSign,
        deleteOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        divideOperation,
        caculateResult
    } = useCalculator()


    return (
        <View style={global_styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text adjustsFontSizeToFit numberOfLines={1}
                    style={global_styles.mainResult}>{number}
                </Text>
                <Text adjustsFontSizeToFit numberOfLines={1}
                    style={global_styles.subResult}>{(prevNumber === '0' ? ' ' : prevNumber)}
                </Text>
            </View>

            <View style={global_styles.row}>
                <CalculatorButton onPress={clean} label='AC' color={colors.lightGray} textColor={colors.background} />
                <CalculatorButton onPress={toogleSign} label='+/-' color={colors.lightGray} textColor={colors.background} />
                <CalculatorButton onPress={deleteOperation} label='%' color={colors.lightGray} textColor={colors.background} />
                <CalculatorButton onPress={divideOperation} label='÷' color={colors.orange} />
            </View>

            <View style={global_styles.row}>
                <CalculatorButton onPress={() => buildNumber('7')} label='7' color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('8')} label='8' color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('9')} label='9' color={colors.darkGray} />
                <CalculatorButton onPress={multiplyOperation} label='x' color={colors.orange} />
            </View>

            <View style={global_styles.row}>
                <CalculatorButton onPress={() => buildNumber('4')} label='4' color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('5')} label='5' color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('6')} label='6' color={colors.darkGray} />
                <CalculatorButton onPress={subtractOperation} label='-' color={colors.orange} />
            </View>

            <View style={global_styles.row}>
                <CalculatorButton onPress={() => buildNumber('1')} label='1' color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('2')} label='2' color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('3')} label='3' color={colors.darkGray} />
                <CalculatorButton onPress={addOperation} label='+' color={colors.orange} />
            </View>


            <View style={global_styles.row}>
                <CalculatorButton onPress={() => buildNumber('0')} label='0' color={colors.darkGray} doubleSize={true} leftPosition={true} />
                <CalculatorButton onPress={() => buildNumber('.')} label='.' color={colors.darkGray} />
                <CalculatorButton onPress={caculateResult} label='=' color={colors.orange} />
            </View>
        </View>
    )
}


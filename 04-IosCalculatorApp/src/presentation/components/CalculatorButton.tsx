import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, global_styles } from '../../config/theme/app-theme'

interface Props {
    label: string;
    color?: string;
    textColor?: string;
    doubleSize?: boolean;
    leftPosition?: boolean;
    onPress: () => void
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    textColor = colors.textPrimary,
    doubleSize = false,
    leftPosition = false,
    onPress,
}: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...global_styles.button,
                width: (doubleSize) ? 160 : 70,
                backgroundColor: color,
                opacity: (pressed) ? 0.8 : 1,
            })}>
            <Text style={[global_styles.buttonText,
            {
                color: textColor,
                textAlign: (leftPosition) ? 'left' : 'center',
                marginHorizontal: (leftPosition) ? 15 : 0
            }
            ]}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({})
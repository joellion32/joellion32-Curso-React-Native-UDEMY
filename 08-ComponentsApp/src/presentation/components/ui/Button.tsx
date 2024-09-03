import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>;
    onPress: () => void;
}


export default function Button({ text, styles, onPress }: Props) {
    const { colors } = useContext(ThemeContext)

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: colors.primary
                },
                styles
            ])}
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor
                }
            ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({})
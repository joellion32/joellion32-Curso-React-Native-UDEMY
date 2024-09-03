import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode, useContext } from 'react'
import { globalStyles } from '../../../config/theme'
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}


export const CustomView = ({ style, children, margin = false }: Props) => {
    const { colors } = useContext(ThemeContext)

    return (
        <View style={
            [globalStyles.mainContainer,
                style,
            margin ? globalStyles.globalMargin : null, { backgroundColor: colors.background }]
        }>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})
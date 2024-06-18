import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme';

interface Props {
    label: string;
    onPress: () => void;
}

export const PrimaryButton = ({
    label,
    onPress
}: Props) => {

    return (
        <Pressable onPress={onPress}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}

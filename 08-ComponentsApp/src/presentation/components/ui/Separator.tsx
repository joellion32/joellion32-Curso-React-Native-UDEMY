import { StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme'

interface Props {
    style?: StyleProp<ViewStyle>
}


export const Separator = ({ style }: Props) => {
    return (
        <View style={{
            backgroundColor: 'white'
        }}>
            <View style={[
                {
                    alignSelf: 'center',
                    width: '90%',
                    height: 1,
                    backgroundColor: colors.text,
                    opacity: 0.1,
                    marginVertical: 8
                },
                style
            ]}>
            </View>
        </View>
    )
}


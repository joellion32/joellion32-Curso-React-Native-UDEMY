import { Pressable, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Separator } from './Separator';
import { colors } from '../../../config/theme';

interface Props {
    name: string;
    icon: string;
    component: string;
    isFirst: boolean;
    isLast: boolean;
}

export const MenuItem = ({ name, icon, component, isFirst = false, isLast = false }: Props) => {
    const navigation = useNavigation<any>()

    return (
        <>
            <Pressable
                onPress={() => navigation.navigate(component)}
            >
                <View style={{
                    ...styles.container,
                    backgroundColor: colors.cardBackground,
                    ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
                    ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingTop: 10 })
                }}>
                    <Icon name={icon} style={{ marginRight: 10 }} size={25} color={colors.primary} />
                    <Text style={{ color: colors.text }}>{name}</Text>
                    <Icon name='chevron-forward-outline' style={{ marginLeft: 'auto' }} size={25} color={colors.primary} />
                </View>
            </Pressable>

            {!isLast && <Separator />}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})


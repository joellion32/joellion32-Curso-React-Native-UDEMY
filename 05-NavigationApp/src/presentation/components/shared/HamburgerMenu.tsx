import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalColors } from '../../theme/theme';


export const HamburgerMenu = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Icon size={25} name="menu-outline" color={globalColors.primary} />
                </Pressable>
            )
        })
    }, [])

    return (<></>)
}


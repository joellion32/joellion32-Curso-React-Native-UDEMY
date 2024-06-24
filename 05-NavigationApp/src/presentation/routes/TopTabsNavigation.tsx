import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingScreen } from '../screens/SettingScreen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { globalColors } from '../theme/theme';

export const TopTabsNavigation = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <HamburgerMenu />
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarIndicatorStyle: { backgroundColor: globalColors.primary }

            }}>
                <Tab.Screen name="Home" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({})
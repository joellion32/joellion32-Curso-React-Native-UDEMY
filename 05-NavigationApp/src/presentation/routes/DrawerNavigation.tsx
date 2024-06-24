import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { globalColors } from '../theme/theme';
import { BottomTabNavigator } from './BottomTabsNavigation';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />} // drawer custom
            screenOptions={{
                headerShown: false, // eliminar header
                drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',
                // estilos
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            <Drawer.Screen options={{ drawerIcon: ({ color }) => (<Icon size={25} name="bookmark" color={color} />) }} name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen options={{ drawerIcon: ({ color }) => (<Icon size={25} name="person" color={color} />) }} name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

// drawer personalizado

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50
            }}>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

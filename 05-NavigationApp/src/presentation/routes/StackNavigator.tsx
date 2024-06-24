import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SettingScreen } from '../screens/SettingScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { globalColors } from '../theme/theme';

//definir parametros
export type RootStackParams = {
    Home: undefined,
    Product: { id: number, name: string }
    Products: undefined,
    Settings: undefined
}


const Stack = createStackNavigator();

export const StackNavigator = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: globalColors.primary,
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    );
}
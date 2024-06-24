import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../tabs/Tab1Screen';
import { Tab2Screen } from '../tabs/Tab2Screen';
import { Tab3Screen } from '../tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigation } from './TopTabsNavigation';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator sceneContainerStyle={{
            backgroundColor: globalColors.background
        }}
            screenOptions={{
                // headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                tabBarActiveTintColor: globalColors.primary,
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transpartent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen name="Tab1" options={{ title: 'Tab1', headerTintColor: globalColors.primary, tabBarIcon: ({ color }) => (<Icon name="home" size={25} color={color} />) }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: 'Tab2', headerTintColor: globalColors.primary, tabBarIcon: ({ color }) => (<Icon name="alarm" size={25} color={color} />) }} component={TopTabsNavigation} />
            <Tab.Screen name="Tab3" options={{ title: 'Tab3', headerTintColor: globalColors.primary, tabBarIcon: ({ color }) => (<Icon name="settings" size={25} color={color} />) }} component={StackNavigator} />
        </Tab.Navigator>
    );
}
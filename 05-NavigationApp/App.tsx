import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { DrawerNavigation } from './src/presentation/routes/DrawerNavigation';
import { BottomTabNavigator } from './src/presentation/routes/BottomTabsNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Navigation } from './src/presentation/navigation/Navigation';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Navigation />
    </NavigationContainer>
  );
}


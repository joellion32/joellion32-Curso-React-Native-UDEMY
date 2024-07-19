import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';

const Stack = createStackNavigator();

export type RootStackParams = {
    Home: undefined,
    Details: { movieId: number }
}

export const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ title: 'MoviesApp' }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
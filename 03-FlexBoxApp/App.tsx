import { PaperProvider } from 'react-native-paper';
import { CounterScreenM3 } from './src/screens/CounterScreenM3';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/screens/DimensionScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { FlexDirectonScreen } from './src/screens/FlexDirectonScreen';
import { HomeWorkScreen } from './src/screens/HomeWorkScreen';

export default function App() {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon {...props} />
    }}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

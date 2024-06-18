import { PaperProvider } from 'react-native-paper';
import { CounterScreenM3 } from './src/screens/CounterScreenM3';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon {...props} />
    }}>
      <CounterScreenM3 />
    </PaperProvider>
  );
}

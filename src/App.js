import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Routes />
  );
}

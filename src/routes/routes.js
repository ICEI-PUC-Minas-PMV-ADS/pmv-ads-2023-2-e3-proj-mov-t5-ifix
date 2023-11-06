import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import CreateUser from '../screens/createUser';
import ScheduleOrderService from '../screens/scheduleOrderService';
import OrderService from '../screens/orderService';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OrderService" component={OrderService} />
      <Stack.Screen name="Create account" component={CreateUser} />
    </Stack.Navigator>
  );
}

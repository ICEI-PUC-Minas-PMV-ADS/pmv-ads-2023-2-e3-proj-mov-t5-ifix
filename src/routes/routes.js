import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import CreateUser from '../screens/createUser';
import ScheduleOrderService from '../screens/scheduleOrderService';
import OrderService from '../screens/orderService';
import Home from '../screens/home';
import UserList from '../screens/clientes';
import Perfil from '../screens/perfil';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      
      <Stack.Screen name="Clientes" component={UserList} />
      <Stack.Screen name="Perfil" component={Perfil} />

       <Stack.Screen name="Agendamento de serviço" component={ScheduleOrderService}  /> 
     <Stack.Screen name="OrderService" component={OrderService}  /> 
      <Stack.Screen name="Create account" component={CreateUser} />
    </Stack.Navigator>
  );
}

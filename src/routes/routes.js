import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import CreateUser from '../screens/createUser';
import ScheduleOrderService from '../screens/scheduleOrderService';
import OrderService from '../screens/orderService';
import Home from '../screens/home';
import UserList from '../screens/clientes';
import Perfil from '../screens/perfil';
import UserListOrderServices from '../screens/userListOrderServices';
import TechnicianListOrderServices from '../screens/technicianListOrderServices';
import ServiceOrderDetails from '../screens/serviceOrderDetails';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      
      <Stack.Screen name="Clientes" component={UserList} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="List of all your services" component={UserListOrderServices} />

       <Stack.Screen name="Agendamento de serviço" component={ScheduleOrderService}  /> 
     <Stack.Screen name="OrderService" component={OrderService}  /> 
      <Stack.Screen name="Create account" component={CreateUser} />

      <Stack.Screen name="List of services - technician" component={TechnicianListOrderServices} />
      
      <Stack.Screen name="ServiceOrderDetails" component={ServiceOrderDetails} />

    </Stack.Navigator>
  );
}

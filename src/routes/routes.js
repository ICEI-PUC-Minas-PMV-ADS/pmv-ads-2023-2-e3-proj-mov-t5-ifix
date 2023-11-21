import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import CreateUser from '../screens/createUser';
import ScheduleOrderService from '../screens/scheduleOrderService';
import OrderService from '../screens/orderService';
import Home from '../screens/home';
import UserList from '../screens/clientes';
import Perfil from '../screens/perfil';
import { firebaseAuth } from "../external/infra/fireBaseConfig";
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const auth = firebaseAuth;

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((authenticatedUser) => {
      setUser(authenticatedUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Clientes" component={UserList} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Agendamento de serviço" component={ScheduleOrderService} />
            <Stack.Screen name="OrderService" component={OrderService} />
          </>
        ) : (
          <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Create account" component={CreateUser} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

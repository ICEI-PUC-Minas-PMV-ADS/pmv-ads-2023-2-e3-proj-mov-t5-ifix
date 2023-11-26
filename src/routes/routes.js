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
import ListOrderServices from '../screens/listOrderServices';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const auth = firebaseAuth;

const ROUTES = {
  HOME: 'Home',
  PROFILE: 'Clientes',
  PERFIL: 'Perfil',
  SCHEDULE_SERVICE: 'Agendamento de serviço',
  ORDER_SERVICE: 'OrderService',
  LIST_ORDER_SERVICES: 'ListOrderServices',
  LOGIN: 'Login',
  CREATE_ACCOUNT: 'Create account'
};

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, marginRight: 10  }}
      source={require('../assets/logo.png')}
    />
  );
}

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
            <Stack.Screen name={ROUTES.HOME} component={Home} options={{ headerTitle: 'Pagina inicial', headerTitleAlign: 'center', headerRight: props => <LogoTitle {...props} />}}  />
            <Stack.Screen name={ROUTES.PROFILE} component={UserList} options={{ headerTitle: 'Clientes', headerTitleAlign: 'center', headerRight: props => <LogoTitle {...props} />}} />
            <Stack.Screen name={ROUTES.PERFIL} component={Perfil} options={{ headerTitle: 'Minha Conta', headerTitleAlign: 'center', headerRight: props => <LogoTitle {...props} />}} />
            <Stack.Screen name={ROUTES.SCHEDULE_SERVICE} component={ScheduleOrderService} options={{ headerTitle: 'Agendar Serviço', headerTitleAlign: 'center', headerRight: props => <LogoTitle {...props} />}}  />
            <Stack.Screen name={ROUTES.ORDER_SERVICE} component={OrderService} options={{ headerTitle: 'Ordem de Serviço', headerTitleAlign: 'center', headerRight: props => <LogoTitle {...props} />}} />
            <Stack.Screen name={ROUTES.LIST_ORDER_SERVICES} component={ListOrderServices} options={{ headerTitle: 'Lista', headerTitleAlign: 'center', headerRight: props => <LogoTitle {...props} />}} />
          </>
        ) : (
          <>
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen name={ROUTES.CREATE_ACCOUNT} component={CreateUser} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

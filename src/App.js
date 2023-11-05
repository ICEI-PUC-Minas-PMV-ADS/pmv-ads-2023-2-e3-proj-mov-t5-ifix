import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import os from './screens/os';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*Voltar para login*/}
      <Stack.Navigator initialRouteName='Os'>
      <Stack.Screen name='os' component={os} options={{headerShown:false}}/>
        {/* <Stack.Screen name='login' component={login} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import PublicProfile from './PublicProfile';
import Login from './Login';
import Signup from './Signup';
import HomeNews from './HomeNews';
import { Emprendimiento } from './old/Emprendimiento';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#888',
          fontSize: 14
        },
        headerStyle: {
          backgroundColor: '#fafafa'
        }
      }}
    >
      <Stack.Screen name="Inicio" component={HomeNews} />
      <Stack.Screen name="Emprendimiento" component={Emprendimiento} />
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="PublicProfile" component={PublicProfile} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresa" component={Login} />
      <Stack.Screen name="Registro" component={Signup} />
      <Stack.Screen name="Perfil" component={Profile} />
    </Stack.Navigator>
  );
}

export { LoginStack };

export default MyStack;

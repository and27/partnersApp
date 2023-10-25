import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import UsersListP from './UsersListP';
import PublicProfile from './PublicProfile';
import Board from './Board';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} />
      <Stack.Screen name="Noticias" component={Board} />
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="PublicProfile" component={PublicProfile} />
      <Stack.Screen name="Networking" component={UsersListP} />
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

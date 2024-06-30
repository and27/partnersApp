import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import PublicProfile from './PublicProfile';
import Login from './Login';
import Signup from './Signup';
import HomeNews from './HomeNews';
import UserInfoForm from './UserForm';

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

function ProfileStack() {
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
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="UserForm" component={UserInfoForm} />
    </Stack.Navigator>
  );
}

export { LoginStack, ProfileStack };

export default MyStack;

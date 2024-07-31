import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from './ProfilePage';
import PublicProfile from './PublicProfilePage';
import Login from './Login';
import Signup from './Signup';
import HomeNews from './HomeNews';
import UserInfoForm from './UserForm';
import PostForm from './PostForm';
import { PostPage } from './PostPage';

export type RootStackParamList = {
  Inicio: undefined;
  PostForm: undefined;
  Perfil: undefined;
  PublicProfile: undefined;
  Ingresa: undefined;
  Registro: undefined;
  UserForm: undefined;
  PostPage: { title: string; description: string; img: string };
};

const Stack = createStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="PostForm" component={PostForm} />
      <Stack.Screen name="Perfil" component={ProfilePage} />
      <Stack.Screen name="PublicProfile" component={PublicProfile} />
      <Stack.Screen name="PostPage" component={PostPage} />
      <Stack.Screen name="Ingresa" component={Login} />
      <Stack.Screen name="Registro" component={Signup} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresa" component={Login} />
      <Stack.Screen name="Registro" component={Signup} />
      <Stack.Screen
        options={{
          title: 'Tu info'
        }}
        name="UserForm"
        component={UserInfoForm}
      />
      <Stack.Screen name="Perfil" component={ProfilePage} />
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
      <Stack.Screen name="Perfil" component={ProfilePage} />
      <Stack.Screen
        options={{
          title: 'Tu info'
        }}
        name="UserForm"
        component={UserInfoForm}
      />
    </Stack.Navigator>
  );
}

export { LoginStack, ProfileStack };

export default MyStack;

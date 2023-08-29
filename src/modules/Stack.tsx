import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import UsersListP from './UsersListP';
import PublicProfile from './PublicProfile';
import Board from './Board';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Board" component={Board} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PublicProfile" component={PublicProfile} />
      <Stack.Screen name="Networking" component={UsersListP} />
    </Stack.Navigator>
  );
}

export default MyStack;

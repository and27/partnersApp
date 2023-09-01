import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import UsersListP from './UsersListP';
import MyStack, { LoginStack } from './Stack';
import Board from './Board';
import Chat from './Chat';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={MyStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home-outline" size={24} />
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Mensajes',
          tabBarIcon: () => (
            <Ionicons name="md-chatbox-ellipses-outline" size={24} />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => <Ionicons name="person-outline" size={24} />
        }}
      />
      <Tab.Screen
        name="Find Partners"
        component={UsersListP}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation({ isSignedIn }) {
  return (
    <NavigationContainer>
      {isSignedIn ? <MyTabs /> : <LoginStack />}
    </NavigationContainer>
  );
}

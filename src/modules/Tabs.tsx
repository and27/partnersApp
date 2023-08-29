import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Profile';
import UsersListP from './UsersListP';
import MyStack from './Stack';
import Login from './Login';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Partners"
        component={MyStack}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home-outline" size={24} />
        }}
      />
      <Tab.Screen
        name="My Profile"
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
      {isSignedIn ? <MyTabs /> : <Login />}
    </NavigationContainer>
  );
}

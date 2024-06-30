import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import UsersListP from './UsersListP';
import MyStack, { LoginStack, ProfileStack } from './Stack';
import Chat from './Chat';
import { COLORS } from '../colors';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          paddingVertical: 7,
          backgroundColor: '#f8f8f8',
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: COLORS.green,
          shadowOpacity: 0.3,
          shadowRadius: 5
        }
      }}
    >
      <Tab.Screen
        name="MainStack"
        component={MyStack}
        options={{
          tabBarLabel: 'Inicio',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={focused ? COLORS.green : '#888'}
            />
          )
        }}
      />
      <Tab.Screen
        name="Encuentra un equipo"
        component={UsersListP}
        options={{
          tabBarLabel: 'Partners',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={22}
              color={focused ? COLORS.green : '#888'}
            />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Mensajes',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                size={22}
                color={focused ? COLORS.green : '#888'}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={22}
                color={focused ? COLORS.green : '#888'}
              />
            );
          }
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

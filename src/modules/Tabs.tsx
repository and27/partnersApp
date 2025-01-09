import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SuggestedConnections from './SuggestedConnections';
import MyStack, { LoginStack, ProfileStack } from './Stack';
import Chat from './Chat';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: '#888',
        headerStyle: {
          backgroundColor: '#f8f8f8'
        },
        headerTitleStyle: {
          color: '#888',
          fontSize: 14
        },
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
      {/* <Tab.Screen
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
      /> */}
      <Tab.Screen
        name="Connections"
        component={SuggestedConnections}
        options={{
          title: 'Partners sugeridos',
          tabBarLabel: 'Partners',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              size={24}
              color={focused ? COLORS.green : '#888'}
            />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Mis partners',
          tabBarLabel: 'Mensajes',
          headerShown: true,
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
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
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

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

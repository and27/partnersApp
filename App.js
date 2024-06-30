import { StatusBar } from 'expo-status-bar';
import Navigation from './src/modules/Tabs';
import { createContext, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Context = createContext();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <GestureHandlerRootView>
        <Context.Provider value={{ setIsSignedIn: setIsSignedIn }}>
          <StatusBar style="dark" />
          <Navigation isSignedIn={isSignedIn} />
        </Context.Provider>
      </GestureHandlerRootView>
    </>
  );
}
export { Context };

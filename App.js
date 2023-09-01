import { StatusBar } from 'expo-status-bar';
import Navigation from './src/modules/Tabs';
import { createContext, useState } from 'react';

const Context = createContext();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Context.Provider value={{ setIsSignedIn: setIsSignedIn }}>
        <StatusBar style="dark" />
        <Navigation isSignedIn={isSignedIn} />
      </Context.Provider>
    </>
  );
}
export { Context };

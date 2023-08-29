import { StatusBar } from 'expo-status-bar';
import Navigation from './src/modules/Tabs';

export default function App() {
  const isSignedIn = true;
  return (
    <>
      <StatusBar style="dark" />
      <Navigation isSignedIn />
    </>
  );
}

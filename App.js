import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Main from './src/modules/Main';
import Profile from './src/modules/Profile';
import UsersList from './src/modules/UsersList';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </NativeRouter>
    </>
  );
}

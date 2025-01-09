import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://vtnbegbteigulrkcirvx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bmJlZ2J0ZWlndWxya2NpcnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2OTA0MjksImV4cCI6MjAzNTI2NjQyOX0.UiCLgVsJFvlb5VNh0QXj2iIStc4rPXityGqAjwrOKXc',
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  }
);

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email, //'andro@gmail.com',
    password: password //'qetadg77Y'
  });
  return { data, error };
};

export const signupWithPassword = async user => {
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password
  });
  return { data, error };
};

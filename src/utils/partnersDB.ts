import { supabase } from './supabase';

const savePost = async post => {
  const { data, error } = await supabase.from('posts').insert(post);
  return { data, error };
};

const updateProfile = async userInfo => {
  const { data, error } = await supabase.from('user').upsert(userInfo);
  return { data, error };
};

export { savePost, updateProfile };

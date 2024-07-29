import { supabase } from './supabase';

const getPosts = async () => {
  const { data, error } = await supabase.from('post').select('*');
  return { data, error };
};

const savePost = async post => {
  const { data, error } = await supabase.from('post').insert(post);
  return { data, error };
};

const upsertUserInfo = async userInfo => {
  const { data, error } = await supabase.from('user').upsert(userInfo);
  return { data, error };
};

const getUserInfo = async userId => {
  const { data, error } = await supabase
    .from('user')
    .select('*')
    .eq('uid', userId);
  return { data, error };
};

const getSuggestedConnections = async userId => {
  const { data, error } = await supabase
    .from('user')
    .select('*')
    .neq('uid', userId);
  return { data, error };
};

export {
  getPosts,
  savePost,
  upsertUserInfo,
  getUserInfo,
  getSuggestedConnections
};

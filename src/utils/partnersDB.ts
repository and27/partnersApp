import { supabase } from './supabase';

const savePost = async post => {
  const { data, error } = await supabase.from('posts').insert(post);
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

export { savePost, upsertUserInfo, getUserInfo, getSuggestedConnections };

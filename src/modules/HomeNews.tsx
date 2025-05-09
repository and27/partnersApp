import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image
} from 'react-native';
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { downloadPostImage, getPosts, getUserInfo } from '../utils/partnersDB';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from './Stack';
import { StackNavigationProp } from '@react-navigation/stack';

const filters = ['Todos', 'Concursos', 'Talento'];
type PostNavigationProp = StackNavigationProp<RootStackParamList, 'PostPage'>;

export default function HomeNews() {
  const [filter, setFilter] = useState<string>('Todos');
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation<PostNavigationProp>();

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = error => {
        reject(error);
      };

      fileReader.readAsDataURL(file);
    });
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await getPosts();
      if (error) {
        console.error('Error fetching posts:', error);
        return null;
      }
      const posts = await Promise.all(
        data.map(async post => {
          const { data: userData, error: userError } = await getUserInfo(
            post.user_id
          );
          if (userError) {
            console.error('Error fetching user info:', userError);
          }
          if (post.image_url) {
            const { data, error } = await downloadPostImage(post.image_url);
            if (error) {
              console.error('Error downloading image:', error);
            }
            try {
              const imgUrl = await readFileAsDataURL(data);
              post.img = imgUrl;
            } catch (err) {
              console.error('Error reading file:', err);
            }
          }
          return {
            ...post,
            user: userData[0]
          };
        })
      );
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.filtersContainer}>
          {filters.map((f, index) => {
            const isActive = f === filter;
            return (
              <Pressable
                style={[
                  styles.filter,
                  {
                    borderColor: isActive ? COLORS.green : COLORS.lightGray
                  }
                ]}
                key={index}
                onPress={() => setFilter(f)}
              >
                <Text
                  style={{
                    color: isActive ? COLORS.green : '#aaa'
                  }}
                >
                  {f}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {posts
          .filter(post => filter === 'Todos' || post.category === filter)
          .map((post, index) => (
            <View style={styles.card} key={index}>
              <Pressable
                style={styles.heading}
                onPress={() => navigation.navigate('PublicProfile' as never)}
              >
                <Ionicons name="person-circle" size={50} color={COLORS.green} />
                <View>
                  <Text style={styles.title}>{post?.user.name}</Text>
                  <Text style={styles.position}>{post?.user.ocupation}</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate('PostPage', {
                    title: post.title,
                    description: post.description,
                    img: post.img
                  })
                }
              >
                <Text style={styles.position} numberOfLines={2}>
                  {post?.description}
                </Text>
                {post?.img && (
                  <Image source={{ uri: post.img }} style={styles.cardImg} />
                )}
              </Pressable>
            </View>
          ))}
      </ScrollView>
      <Button
        iconName="add"
        onPress={() => navigation.navigate('PostForm' as never)}
        btnStyles={styles.floatingButton}
        textStyles={{ fontSize: 14, fontWeight: '600' }}
      >
        Publicar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: -8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25
  },
  container2: {
    paddingLeft: 16
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primaryBlue,
    marginTop: 24
  },
  filtersContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primaryWhite
  },
  filter: {
    padding: 8,
    borderColor: '#eaeaea',
    borderWidth: 1,
    borderRadius: 8
  },
  card: {
    padding: 24,
    paddingTop: 16,
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primaryWhite
  },
  cardImg: {
    width: '100%',
    height: 120,
    borderRadius: 16,
    marginTop: 8
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  userImg: { width: 50, height: 50, borderRadius: 100 },
  title: {
    fontWeight: '600',
    color: COLORS.green,
    marginTop: 0
  },
  position: {
    marginTop: 2,
    fontSize: 12,
    color: '#444'
  }
});

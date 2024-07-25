import { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context } from '../../App';
import { COLORS } from '../colors';
import { useNavigation } from '@react-navigation/native';
import { UserProfileSection } from '../components/UserProfileSection';
import { getUserInfo } from '../utils/partnersDB';

export default function ProfilePage() {
  const { setIsSignedIn } = useContext(Context);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await getUserInfo(
        '79c99535-2e01-4266-9c69-03d3bc6e2bce'
      );
      if (error) {
        console.error(error);
      } else {
        setUser(data[0]);
      }
    };
    getUser();
  }, []);

  if (!user) {
    return <Text>Cargando...</Text>;
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container2}>
        <UserProfileSection user={user} />
        <View>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('UserForm' as never)}
          >
            <Text style={styles.btnText}>Editar </Text>
          </Pressable>
          <Pressable onPress={() => setIsSignedIn(false)}>
            <Text style={{ paddingVertical: 12, textAlign: 'center' }}>
              Cerrar sesión
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    backgroundColor: COLORS.primaryWhite,
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingHorizontal: 24
  },
  containerInner: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 12,
    color: COLORS.primaryBlue,
    fontWeight: '600',
    marginBottom: 8
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    marginBottom: 16,
    color: COLORS.darkGray
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },

  section: {
    marginTop: 24
  },

  projects: { display: 'flex', flexDirection: 'row', gap: 8, marginTop: 4 },

  goal: {
    marginTop: 20
  },
  btn: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 48,
    marginTop: 16,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  btnText: {
    color: COLORS.primaryWhite,
    fontSize: 16
  }
});

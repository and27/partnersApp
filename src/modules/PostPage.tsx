import { Image, StyleSheet, Text, View } from 'react-native';

export const PostPage = ({ route }) => {
  const { title, description, img } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      {img && <Image source={{ uri: img }} style={styles.img} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  },
  img: {
    width: '100%',
    height: 300,
    marginTop: 16
  }
});

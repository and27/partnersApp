import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants/colors';

const LearningCard = ({ title, position, description, img }) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.cardInner}>
        <View style={styles.content}>
          <View style={styles.heading}>
            <Image source={img} style={styles.userImg} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.position}>{position}</Text>
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Seguir</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default LearningCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.green,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryWhite,
    padding: 8
  },

  cardInner: {
    backgroundColor: COLORS.primaryWhite,
    padding: 8,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 4
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  userImg: { width: 50, height: 50, borderRadius: 100 },
  title: {
    fontWeight: '500',
    color: COLORS.green,
    marginTop: 4
  },
  position: {
    marginTop: 2,
    fontSize: 12,
    color: '#777'
  },
  description: {
    color: '#777',
    maxWidth: 200,
    marginTop: 16,
    fontSize: 12
  },
  btn: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginTop: 4
  },
  btnText: {
    color: COLORS.primaryWhite,
    fontSize: 12
  }
});

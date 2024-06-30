import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../colors';

interface ButtonProps {
  onPress: () => void;
  btnStyles?: object;
  textStyles?: object;
  children: React.ReactNode;
}

const Button = ({
  onPress,
  btnStyles,
  textStyles,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Pressable style={[styles.btn, btnStyles]} onPress={onPress} {...props}>
      <Text style={[styles.btnText, textStyles]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 48,
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center'
  },
  btnText: {
    color: COLORS.primaryWhite
  }
});

export default Button;

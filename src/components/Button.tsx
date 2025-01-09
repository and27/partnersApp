import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler
} from 'react-hook-form';

interface ButtonProps {
  onPress: () => void;
  btnStyles?: object;
  textStyles?: object;
  iconName?: string;
  children: React.ReactNode;
}

const Button = ({
  onPress,
  btnStyles,
  textStyles,
  iconName,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Pressable style={[styles.btn, btnStyles]} onPress={onPress} {...props}>
      <Text style={[styles.btnText, textStyles]}>{children}</Text>
      {iconName && (
        <Ionicons
          name={iconName as any}
          size={20}
          color={COLORS.primaryWhite}
        />
      )}
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: COLORS.primaryWhite
  }
});

export default Button;

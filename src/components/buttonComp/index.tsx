import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface IButtonComp {
  bgColor?: 'white' | 'primary';
  disabled?: boolean;
  onPress?: () => void;
  text: string;
}

export const ButtonComp: FC<IButtonComp> = ({
  bgColor,
  disabled,
  onPress,
  text,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonWrap,
        bgColor === 'white' && styles.buttonColor,
        disabled ? styles.disabled : null,
      ]}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          bgColor === 'white' && styles.textColor,
          disabled ? styles.disabledText : null,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

import React, {FC, useRef, useState} from 'react';
import {Animated, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type ITextInput = {
  value: string;
  onChangeText: (text: string) => void;
};

interface InputProp extends ITextInput {
  inputType: 'password' | 'text';
}

export const TextInputComp: FC<InputProp> = ({
  value,
  onChangeText,
  inputType,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const animationValue = useRef(new Animated.Value(0)).current;

  const animation = (value: number) => {
    Animated.timing(animationValue, {
      toValue: value,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const onTextInputFocus = () => {
    animation(1);
    setIsFocused(true);
  };
  const onTextInputBlur = () => {
    animation(0);
    setIsFocused(false);
  };

  const labelDynamicStyles = {
    fontSize: 16,
    color: '#A7A3B3',
    transform: [
      {
        translateY: 17,
      },
    ],
  };

  return (
    <View style={[styles.inputWrapper, isFocused && styles.focusInput]}>
      <Animated.Text
        style={[styles.label, !isFocused && !value && labelDynamicStyles]}>
        Label
      </Animated.Text>
      <View style={styles.row}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={inputType === 'password' ? true : false}
          style={[styles.input]}
          onFocus={onTextInputFocus}
          onBlur={onTextInputBlur}
        />
      </View>
    </View>
  );
};

export const UrlTextInputComp: FC<ITextInput> = ({value, onChangeText}) => {
  const [isFocused, setIsFocused] = useState(false);

  const animationValue = useRef(new Animated.Value(0)).current;

  const animation = (value: number) => {
    Animated.timing(animationValue, {
      toValue: value,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const onTextInputFocus = () => {
    animation(1);
    setIsFocused(true);
  };
  const onTextInputBlur = () => {
    animation(0);
    setIsFocused(false);
  };

  const labelDynamicStyles = {
    fontSize: 16,
    color: '#A7A3B3',
    transform: [
      {
        translateY: 17,
      },
    ],
  };

  return (
    <Pressable style={[styles.inputWrapper, isFocused && styles.focusInput]}>
      <View style={styles.row}>
        {(isFocused || value) && (
          <>
            <Text style={styles.grayText}>https://</Text>
            <View style={styles.line} />
          </>
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input]}
          onFocus={onTextInputFocus}
          onBlur={onTextInputBlur}
        />
      </View>
      <Animated.Text
        style={[styles.label, !isFocused && !value && labelDynamicStyles]}>
        Label
      </Animated.Text>
    </Pressable>
  );
};

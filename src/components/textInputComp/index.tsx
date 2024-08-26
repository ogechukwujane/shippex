import React, {FC, useRef, useState} from 'react';
import {Animated, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type ITextInput = {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  errorMessage?: string;
};

interface InputProp extends ITextInput {
  inputType?: 'password' | 'text';
}

export const TextInputComp: FC<InputProp> = ({
  value,
  onChangeText,
  inputType,
  label,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef<TextInput | null>(null);

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
        translateY: 14,
      },
    ],
  };

  const focusTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <View>
      <Pressable
        style={[styles.inputWrapper, isFocused && styles.focusInput]}
        onPress={focusTextInput}>
        <Animated.Text
          style={[styles.label, !isFocused && !value && labelDynamicStyles]}>
          {label}
        </Animated.Text>
        <View style={styles.row}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={inputType === 'password' ? true : false}
            style={[styles.input]}
            onFocus={onTextInputFocus}
            onBlur={onTextInputBlur}
            autoCapitalize="none"
            ref={textInputRef}
          />
        </View>
      </Pressable>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export const UrlTextInputComp: FC<ITextInput> = ({
  value,
  onChangeText,
  label,
  errorMessage,
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
        translateY: 14,
      },
    ],
  };

  return (
    <View>
      <Pressable style={[styles.inputWrapper, isFocused && styles.focusInput]}>
        <Animated.Text
          style={[styles.label, !isFocused && !value && labelDynamicStyles]}>
          {label}
        </Animated.Text>
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
            autoCapitalize="none"
          />
        </View>
      </Pressable>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

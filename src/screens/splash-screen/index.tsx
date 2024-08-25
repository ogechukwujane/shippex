import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Image, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationParams} from '../../navigation/type';

export const SplashScreen = () => {
  const navigation = useNavigation<NavigationParams>();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const animationSequence = Animated.sequence([
      Animated.delay(2000),
      Animated.timing(scaleAnim, {
        toValue: 6,
        duration: 1200,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        // Animated.timing(translateYAnim, {
        //   toValue: -500, // Slide up by 200 pixels
        //   duration: 2000, // 2 seconds to slide up
        //   easing: Easing.out(Easing.quad),
        //   useNativeDriver: true,
        // }),
      ]),
    ]);
    animationSequence.start(() => {
      setBackgroundColor('#2F50C1');
      setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 200);
    });
  }, []);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Animated.View
        style={[
          styles.logoWrap,
          {
            transform: [
              {scale: scaleAnim},
              {
                skewX: rotateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '90deg'],
                }),
              },
              {translateY: translateYAnim},
            ],
            opacity: opacityAnim,
          },
        ]}>
        <Image
          source={require('../../../assets/icons/logo-icon.png')}
          style={styles.logo}
        />
      </Animated.View>
    </View>
  );
};

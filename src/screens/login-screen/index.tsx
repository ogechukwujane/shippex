import React, {useRef, useState} from 'react';
import {Animated, Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {BottomSheet, ButtonComp, TextInputComp} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from 'formik';
import {LoginValidation} from './validation';
import {useNavigation} from '@react-navigation/native';
import {NavigationParams} from '../../navigation/type';
import {useLoginMutation} from '../../store/authApi';

export const LoginScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation<NavigationParams>();
  const [login, {isLoading}] = useLoginMutation();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('usr', values.email);
    formData.append('pwd', values.password);
    login(formData)
      .unwrap()
      .then(res => {
        fadeOut();
        setShowModal(false);
        navigation.navigate('BottomTabs', {
          screen: 'HomeScreen',
          params: {userName: res.full_name},
        });
      })
      .catch(err => console.log('err', err));
  };

  const {values, touched, errors, handleSubmit, handleChange} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidation,
    onSubmit,
  });

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.container]}>
      <View />
      <View style={styles.iconWrap}>
        <Image
          source={require('../../../assets/icons/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonWrap}>
        <ButtonComp
          text="Login"
          bgColor="white"
          onPress={() => setShowModal(true)}
        />
      </View>
      <BottomSheet
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <Animated.View
          style={[
            styles.loginContent,
            {
              opacity: fadeAnim,
            },
          ]}>
          <View style={styles.section}>
            <Pressable
              style={styles.closeWrap}
              onPress={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faChevronLeft} color="#2F50C1" />
              <Text style={[styles.paragraph, styles.cancelText]}>Cancel</Text>
            </Pressable>
            <View style={styles.textWrap}>
              <Text style={styles.title}>Login</Text>
              <Text style={styles.paragraph}>
                Please enter your First, Last name and your phone number in
                order to register
              </Text>
            </View>
            <View style={styles.inputWrap}>
              <TextInputComp
                label="Username / Email"
                value={values.email}
                onChangeText={handleChange('email')}
                errorMessage={touched.email ? errors.email : ''}
              />
              <TextInputComp
                label="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                inputType="password"
                errorMessage={touched.password ? errors.password : ''}
              />
            </View>
          </View>
          <ButtonComp
            text={isLoading ? 'Loading...' : 'Login'}
            onPress={handleSubmit}
            disabled={!values.email || !values.password}
          />
        </Animated.View>
      </BottomSheet>
    </Animated.View>
  );
};

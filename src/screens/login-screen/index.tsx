import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {
  BottomSheet,
  ButtonComp,
  TextInputComp,
  UrlTextInputComp,
} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from 'formik';
import {LoginValidation} from './validation';

export const LoginScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {};

  const {values, touched, errors, handleSubmit, handleChange} = useFormik({
    initialValues: {
      url: '',
      email: '',
      password: '',
    },
    validationSchema: LoginValidation,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.iconWrap}>HomeScreen</Text>
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
        <View style={styles.loginContent}>
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
              <UrlTextInputComp
                label="URL"
                value={values.url}
                onChangeText={handleChange('url')}
                errorMessage={touched.url ? errors.url : ''}
              />
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
            text="Login"
            onPress={handleSubmit}
            disabled={!values.email || !values.url || !values.password}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

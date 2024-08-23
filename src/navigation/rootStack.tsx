import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SplashScreen} from '../screens';
import {BottomTabProp, BottomTabs} from './bottomStack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParam = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  BottomTabs: NavigatorScreenParams<BottomTabProp>;
};

const RootStack = createStackNavigator<RootStackParam>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerStatusBarHeight: 0, headerShown: false}}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="BottomTabs" component={BottomTabs} />
    </RootStack.Navigator>
  );
};

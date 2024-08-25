import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SplashScreen} from '../screens';
import {BottomTabParams, BottomTabs} from './bottomStack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  BottomTabs: NavigatorScreenParams<BottomTabParams>;
};

const RootStack = createStackNavigator<RootStackParams>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: false,
        animationEnabled: false,
      }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="BottomTabs" component={BottomTabs} />
    </RootStack.Navigator>
  );
};

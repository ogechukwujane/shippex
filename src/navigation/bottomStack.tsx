import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';

export type BottomTabProp = {
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabProp>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerStatusBarHeight: 0, headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';
import {HomeIcon, ProfileIcon, ScanIcon, WalletIcon} from '../../assets/svgs';

export type BottomTabParams = {
  HomeScreen: undefined;
  ScanScreen: undefined;
  WalletScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: false,
        tabBarActiveTintColor: '#5B4CCC',
        tabBarInactiveTintColor: '#A7A3B3',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? '#2F50C1' : '#A7A3B3'} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({focused}) => (
            <ScanIcon color={focused ? '#2F50C1' : '#A7A3B3'} />
          ),
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({focused}) => (
            <WalletIcon color={focused ? '#2F50C1' : '#A7A3B3'} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused ? '#2F50C1' : '#A7A3B3'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

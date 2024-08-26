import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, ScanScreen, WalletScreen} from '../screens';
import {HomeIcon, ProfileIcon, ScanIcon, WalletIcon} from '../../assets/svgs';

export type BottomTabParams = {
  HomeScreen: {userName: string};
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
          height: 80,
          paddingBottom: 25,
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
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({focused}) => (
            <ScanIcon color={focused ? '#2F50C1' : '#A7A3B3'} />
          ),
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({focused}) => (
            <WalletIcon color={focused ? '#2F50C1' : '#A7A3B3'} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
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

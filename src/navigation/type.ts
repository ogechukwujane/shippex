import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParams} from './rootStack';
import {BottomTabParams} from './bottomStack';
import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationParams = CompositeNavigationProp<
  StackNavigationProp<RootStackParams>,
  BottomTabNavigationProp<BottomTabParams>
>;

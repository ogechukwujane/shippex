import React, {FC, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRight,
  faCheck,
  faExpandAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {PackageIcon} from '../../../assets/svgs';

interface IButtonComp {}

export const ShipmentCardComp = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.cardWrap}>
        <Pressable style={styles.checkbox}>
          <FontAwesomeIcon icon={faCheck} />
        </Pressable>
        <View style={styles.iconWrap}>
          <PackageIcon />
        </View>
        <View style={styles.textCol}>
          <Text style={[styles.paragraph, styles.header]}>AWB</Text>
          <Text style={styles.id}>41785691423</Text>
          <View style={styles.row}>
            <Text style={styles.paragraph}>Cairo</Text>
            <FontAwesomeIcon icon={faArrowRight} size={8} color="#4561DB" />
            <Text style={styles.paragraph}>Alexandria</Text>
          </View>
        </View>
        <Text style={styles.statusCard}>Completed</Text>
        <Pressable
          style={[styles.openIconWrap, dropdown && styles.bgColored]}
          onPress={() => setDropDown(prev => !prev)}>
          <FontAwesomeIcon
            icon={faExpandAlt}
            size={11}
            color={dropdown ? '#fff' : '#4561DB'}
          />
        </Pressable>
      </View>
      {dropdown && (
        <View style={styles.cardContent}>
          <View style={styles.cardFlex}>
            <View style={styles.cardCol}>
              <Text style={styles.coloredText}>Origin</Text>
              <Text style={styles.title}>Cairo</Text>
              <Text style={styles.paragraph}>Docci 22 Nile st</Text>
            </View>
            <View style={[styles.cardCol, styles.center]}>
              <FontAwesomeIcon icon={faArrowRight} size={22} color="#4561DB" />
            </View>
            <View style={styles.cardCol}>
              <Text style={styles.coloredText}>Destination</Text>
              <Text style={styles.title}>Alexandria</Text>
              <Text style={styles.paragraph}>Docci 22 Nile st</Text>
            </View>
          </View>
          <View style={styles.bottonFlex}>
            <Pressable style={styles.buttonCard}>
              <FontAwesomeIcon icon={faPhone} size={16} color="#fff" />
              <Text style={styles.buttonText}>Call</Text>
            </Pressable>
            <Pressable style={[styles.buttonCard, styles.buttonCard2]}>
              <FontAwesomeIcon icon={faWhatsapp} size={20} color="#fff" />
              <Text style={styles.buttonText}>WhatsApp</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

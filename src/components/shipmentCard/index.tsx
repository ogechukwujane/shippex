import React, {FC, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRight,
  faCheckSquare,
  faExpandAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {PackageIcon} from '../../../assets/svgs';

interface IShipmentCardComp {
  data: IShipmentData;
  onCheck: (name: string) => void;
  checkedData: string[];
}

export const ShipmentCardComp: FC<IShipmentCardComp> = ({
  data,
  onCheck,
  checkedData,
}) => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.cardWrap}>
        <Pressable style={styles.checkbox} onPress={() => onCheck(data?.name)}>
          {checkedData.includes(data.name) && (
            <FontAwesomeIcon icon={faCheckSquare} color="#4561DB" />
          )}
        </Pressable>
        <View style={styles.iconWrap}>
          <PackageIcon />
        </View>
        <View style={styles.textCol}>
          <Text style={[styles.paragraph, styles.header]}>{data.company}</Text>
          <Text style={styles.id}>{data.name}</Text>
          <View style={styles.row}>
            <Text style={styles.paragraph}>{data.origin_country}</Text>
            <FontAwesomeIcon icon={faArrowRight} size={8} color="#4561DB" />
            <Text style={styles.paragraph}>{data.destination_country}</Text>
          </View>
        </View>
        <Text style={styles.statusCard}>{data.status}</Text>
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
              <Text style={styles.title}>{data.origin_state}</Text>
              <Text style={styles.paragraph}>{data.origin_city}</Text>
            </View>
            <View style={[styles.cardCol, styles.center]}>
              <FontAwesomeIcon icon={faArrowRight} size={22} color="#4561DB" />
            </View>
            <View style={styles.cardCol}>
              <Text style={styles.coloredText}>Destination</Text>
              <Text style={styles.title}>{data.destination_state}</Text>
              <Text style={styles.paragraph}>{data.destination_city}</Text>
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

import React, {useState} from 'react';
import {FlatList, Image, Pressable, Text, TextInput, View} from 'react-native';
import {BottomSheet, ShipmentCardComp} from '../../components';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';

export const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.iconWrap}>
            <Image
              source={require('../../../assets/icons/profile.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.logoWrap}>
            <Image
              source={require('../../../assets/icons/primary-logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.iconWrap}>
            <Image
              source={require('../../../assets/icons/notification.png')}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>Hello</Text>
          <Text style={styles.name}>Ibrahim Shaker</Text>
        </View>
        <View style={styles.inputWrap}>
          <Image
            source={require('../../../assets/icons/search.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={'#A7A3B3'}
          />
        </View>
        <View style={styles.buttonFlex}>
          <Pressable
            style={styles.buttonCard}
            onPress={() => setShowModal(true)}>
            <Image
              source={require('../../../assets/icons/filter.png')}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, styles.btnColor]}>Filters</Text>
          </Pressable>
          <Pressable style={[styles.buttonCard, styles.buttonCard2]}>
            <Image
              source={require('../../../assets/icons/scan.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Add Scan</Text>
          </Pressable>
        </View>
        <View style={styles.grid}>
          <View style={styles.row}>
            <Text style={styles.title}>Shipments</Text>
            <View style={styles.rowFlex}>
              <View style={styles.checkbox}>
                <FontAwesomeIcon icon={faCheckSquare} />
              </View>
              <Text style={styles.paragraph}>Mark All</Text>
            </View>
          </View>
          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={(item, index) => index?.toString()}
            renderItem={data => {
              return <ShipmentCardComp />;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <BottomSheet
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContent}>
          <View style={styles.modalFlex}>
            <Text style={styles.paragraph} onPress={() => setShowModal(false)}>
              Cancel
            </Text>
            <Text style={styles.paragraph}>Filters</Text>
            <Text style={styles.paragraph}>Done</Text>
          </View>
          <View style={styles.modalGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <Pressable key={item} style={[styles.filterCard]}>
                <Text style={[styles.buttonText, styles.btnColor]}>
                  Add Scan
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

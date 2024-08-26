import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {BottomSheet, ShipmentCardComp} from '../../components';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {useGetShipmentStatusQuery} from '../../store/shipmentApi';
import {RouteProp} from '@react-navigation/native';
import {BottomTabParams} from '../../navigation/bottomStack';
import {useDebounce} from '../../utils';

type HomeScreenProp = {
  route: RouteProp<BottomTabParams, 'HomeScreen'>;
};

export const HomeScreen: FC<HomeScreenProp> = ({route}) => {
  const {userName} = route.params;
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [shipmentData, setShipmentData] = useState<IShipmentData[]>([]);
  const debounceValue = useDebounce(searchValue);
  const queryParams = {doctype: 'AWB', fields: ['*']};
  const {data, refetch, isLoading, isFetching} =
    useGetShipmentStatusQuery(queryParams);
  const [markedCards, setMarkedCards] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    setShipmentData(data?.message || []);
  }, [data?.message]);

  const filterByState = () => {
    const result = data?.message?.filter(item =>
      item.status.toLowerCase().includes(debounceValue?.toLocaleLowerCase()),
    );
    setShipmentData(result || []);
  };

  useEffect(() => {
    if (data?.message) {
      filterByState();
    }
  }, [debounceValue]);

  const handleSelectItem = (name: string) => {
    markedCards.includes(name)
      ? setMarkedCards(markedCards.filter(item => item !== name))
      : setMarkedCards(prev => [...prev, name]);
  };

  const handleSelectAll = () => {
    if (markedCards?.length <= 0) {
      shipmentData?.forEach(item => {
        setMarkedCards(prev => [...prev, item.name]);
      });
    } else {
      setMarkedCards([]);
    }
  };

  const onRefresh = () => {
    refetch();
  };

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
          <Text style={styles.name}>{userName}</Text>
        </View>
        <View style={styles.inputWrap}>
          <Image
            source={require('../../../assets/icons/search.png')}
            style={styles.icon}
          />
          <TextInput
            value={searchValue}
            onChangeText={text => {
              setSearchValue(text);
            }}
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
            <Pressable style={styles.rowFlex} onPress={handleSelectAll}>
              <View style={styles.checkbox}>
                {markedCards?.length > 0 && (
                  <FontAwesomeIcon icon={faCheckSquare} color="#2F50C1" />
                )}
              </View>
              <Text style={styles.paragraph}>
                {markedCards?.length > 0 ? 'unmark All' : 'Mark All'}
              </Text>
            </Pressable>
          </View>
          {isLoading ? (
            <View style={styles.cardContent}>
              <ActivityIndicator size={'large'} color={'#2F50C1'} />
            </View>
          ) : (
            <>
              <FlatList
                data={shipmentData}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={data => (
                  <ShipmentCardComp
                    data={data.item}
                    checkedData={markedCards}
                    onCheck={handleSelectItem}
                  />
                )}
                refreshing={isFetching}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                  <View style={styles.cardContent}>
                    <Image
                      source={require('../../../assets/icons/not-found.png')}
                      style={styles.notfound}
                    />
                    <Text style={styles.title}>Opps! No item found</Text>
                  </View>
                )}
              />
            </>
          )}
        </View>
      </View>
      <BottomSheet
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContent}>
          <View style={styles.modalFlex}>
            <Text style={styles.paragraph} onPress={() => setActiveFilters([])}>
              Cancel
            </Text>
            <Text style={styles.boldText}>Filters</Text>
            <Text style={styles.paragraph} onPress={() => setShowModal(false)}>
              Done
            </Text>
          </View>
          <View style={styles.modalGrid}>
            {['Pending', 'Completed', 'Delivered', 'Received', 'On Hold'].map(
              (item, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.filterCard,
                    activeFilters.includes(item) && styles.selectedCard,
                  ]}
                  onPress={() => setActiveFilters(prev => [...prev, item])}>
                  <Text
                    style={[
                      styles.buttonText,
                      styles.btnColor,
                      activeFilters.includes(item) && styles.activeColor,
                    ]}>
                    {item}
                  </Text>
                </Pressable>
              ),
            )}
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

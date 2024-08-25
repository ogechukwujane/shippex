import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2F50C1',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  iconWrap: {
    width: 207,
    height: 36,
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  buttonWrap: {
    width: '100%',
    height: 56,
  },
  loginContent: {
    height: '95%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  section: {
    flexDirection: 'column',
    gap: 20,
  },
  closeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: 100,
  },
  textWrap: {
    gap: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  paragraph: {
    fontSize: 17,
    fontWeight: 400,
    color: '#757281',
  },
  cancelText: {
    color: '#2F50C1',
  },
  inputWrap: {
    flexDirection: 'column',
    gap: 5,
  },
});

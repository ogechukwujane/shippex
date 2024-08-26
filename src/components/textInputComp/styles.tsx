import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#F4F2F8',
    borderRadius: 10,
    height: 56,
    gap: 2,
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingVertical: 10,
    position: 'relative',
    marginTop: 20,
  },
  focusInput: {
    borderWidth: 1,
    borderColor: '#2F50C1',
  },
  label: {
    fontSize: 11,
    fontWeight: 'regular',
    color: '#58536E',
    zIndex: 9,
    elevation: 4,
    position: 'absolute',
    top: 7,
    left: 18,
  },
  error: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'regular',
    color: 'red',
  },
  input: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#2F50C1',
    flex: 1,
    height: 40,
  },
  grayText: {fontSize: 16, fontWeight: 'regular', color: '#58536E'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 14,
  },
  line: {
    width: 1,
    height: 16,
    backgroundColor: '#15487620',
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      flex: 1,
      justifyContent: 'flex-end',
    },
    container: {
      backgroundColor: 'white',
      paddingTop: 12,
      paddingHorizontal: 12,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
      minHeight: 200,
    },
    sliderIndicatorRow: {
      flexDirection: 'row',
      marginBottom: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderIndicator: {
      backgroundColor: '#CECECE',
      height: 4,
      width: 45,
    },
  });
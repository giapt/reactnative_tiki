import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      header: {
        height: 56,
        width: Dimensions.get('window').width
      },
      content: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 56,
      }
});
export default styles
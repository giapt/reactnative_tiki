import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#189eff',
        width: Dimensions.get('window').width,
        marginBottom: 1
    },
    searchBox: {
        flex: 4,
        flexDirection: 'row',
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: "#FFF",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 2,
        elevation: 5,
    },
    countProducts:{
        position: 'absolute',
        top: 10,
        right: 10,
        height: 15,
        width: 15,
        borderRadius: 50,
        textAlign: "center",
        fontSize: 10,
        color: '#FFF',
        backgroundColor: '#fd843c',
    },
    icon: {
        width: 20,
        height: 20       
    },
    searchBoxIcon:{
        width: 24,
        height: 24 
    }
});
export default styles
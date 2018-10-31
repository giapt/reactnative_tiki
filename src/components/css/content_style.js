import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,                                                                                                                                                                                                                                    
        flexDirection: 'column',
        backgroundColor: '#ededed',
        width: Dimensions.get('window').width
    },
    slide: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 3,
        marginBottom: 5
    },
    slideImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 3
    },
    bannerImg: {
        width: Dimensions.get('window').width,
        marginBottom: 5
    },
    simpleBoxContainer: {
        backgroundColor: "#FFF",
        width: Dimensions.get('window').width,
        marginBottom: 10
    },
    simpleBoxHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingLeft: 16,
        height: 48,
        color: "#000",
        alignItems: "center" 
    },
    viewAllButton: {
        paddingLeft: 16,
        paddingRight: 16,
        height: 30,
        backgroundColor: "#1ba8ff",
        borderRadius: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 2,
        elevation: 5,
    },
    simpleBoxBody: {
        flexDirection: "column",
        flexWrap: "wrap",
        height: 250,
        backgroundColor: "#FFF"
    },
    categoryItem: {
        width: 120,
        height: 125,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    categoryImg: {
        height: 64,
        width: 64,
    },
    simpleBoxContainerService: {
        backgroundColor: "#002e6e",
        width: Dimensions.get('window').width,
        paddingBottom: 10,
        marginBottom: 10
    },
    simpleBoxHeadingService: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingLeft: 16,
        height: 48,
        color: "#FFF",
        alignItems: "center" 
    },
    serviceItem: {
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 16,
        marginRight: 16,
    },
    serviceImg: {
        height: 32,
        width: 32,
        marginBottom: 8
    },
    functionContainer: {
        width: Dimensions.get('window').width,
        padding: 15,
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
});
export default styles
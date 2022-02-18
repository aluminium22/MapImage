import {Dimensions, StyleSheet} from 'react-native';
export const global = StyleSheet.create({
    container:{
        padding:24
    },
    actionButtonContainer: {
        alignItems: 'center',
        position: 'absolute',
        height: 40,
        left: 0,
        top: Dimensions.get('window').height - 100,
        width: Dimensions.get('window').width,
    },
    actionButton: {
        width: '85%'
    },
    dualButtonContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dualButton: {
        paddingHorizontal: 20,
        marginHorizontal: 16,
        alignContent: 'space-between'
    },
    listHeader: {
        borderRadius: 6,
        width: '90%',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#2B2D42',
    },
    listHeaderText: {
        color: '#ffffff'
    },
    listView: {
        alignItems: 'center',
        width: '100%',
    },
    location: {
        paddingVertical: 48
    },
    locationRow: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        paddingLeft: 0,
        flexDirection: 'row'
    },
    locationImage: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    mapContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
import React, {useEffect, useRef} from 'react'
import {Platform, View} from 'react-native'
import {Button, useTheme} from 'react-native-paper'
import {global} from '../styles/global'
import {useDispatch, useSelector} from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import {updateCoordinates, updateHeight, updateImage, updateWidth} from "../actions/actions";
import MapView, {Marker} from "react-native-maps";
import {DualButton} from "../components/DualButton";

const Home = (props) => {
    const { colors } = useTheme();
    const image = useSelector(state => state.appData.image );
    const lat = useSelector(state => state.appData.lat );
    const long = useSelector( state => state.appData.long);
    const mapRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!lat){
            let location = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 100,
                longitudeDelta: 100,
            }
            mapRef.current.animateToRegion(location, 2 * 1000);
        }
    }, [lat])

    const actionHandler = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            exif: true,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled && result.exif) {
            let longitude = {};
            let latitude = {}
            if(Platform.OS === 'ios'){
                console.log("ios")
               longitude = result.exif.GPSLongitudeRef === "W" ? -Math.abs(result.exif.GPSLongitude):result.exif.GPSLongitude;
               latitude = result.exif.GPSLatitudeRef === "S" ? -Math.abs(result.exif.GPSLatitude):result.exif.GPSLatitude;
            }
            dispatch(updateCoordinates(longitude, latitude))
            dispatch(updateImage(result.uri));
            dispatch(updateHeight(result.height));
            dispatch(updateWidth(result.width))
            let location = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }
            mapRef.current.animateToRegion(location, 3 * 1000);
        }
    }
    const handleReset = () => {
        dispatch(updateImage(''));
        dispatch(updateCoordinates(0, 0))
        dispatch(updateHeight(''));
        dispatch(updateWidth(''))
    }
    const handleRouteImageInfo = () => {
        props.navigation.push('Location');
    }

    return (
        <View style={global.container}>
            <View style={global.mapContainer}>
                <MapView ref={mapRef} style={global.map}>
                    {!!lat &&
                        <Marker image={require('./marker.png')} coordinate={{latitude:lat, longitude:long}} />
                    }
                </MapView>
            </View>
            <View style={global.actionButtonContainer}>
                {!image &&
                <Button style={global.actionButton} color={colors.accent} mode={'contained'} onPress={actionHandler}>Add image to map</Button>
                }
                {!!image &&
                <DualButton
                    leftColor={colors.primary}
                    rightColor={colors.accent}
                    leftButton={handleReset}
                    rightButton={handleRouteImageInfo}
                    leftText={'Reset'}
                    rightText={'Image Info'}
                    />
                }
            </View>
        </View>
    )
}
export default Home
import React from 'react'
import {View, Text,Dimensions, Image } from 'react-native'
import {Button, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {global} from '../../styles/global'
import {DualButton} from "../../components/DualButton";
import {updateCoordinates, updateImage} from "../../actions/actions";
const screen = Dimensions.get('window');

const Location = ({navigation}) => {
    const { colors } = useTheme();
    const uri = useSelector(state => state.appData.image);
    const name = /[^/]*$/.exec(useSelector(state => state.appData.image))[0];
    const long = useSelector(state => state.appData.long);
    const lat = useSelector(state => state.appData.lat);
    const height = useSelector(state => state.appData.height);
    const width = useSelector(state => state.appData.width);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(updateImage(''));
        dispatch(updateCoordinates(0, 0))
        navigation.goBack()
    }

    return (
        <View style={global.location}>
            <View style={global.listView}>
                <View style={global.listHeader}><Text style={global.listHeaderText}>Image Name</Text></View>
                <View style={global.locationRow}>
                    <Button icon={'image'}/><Text>{name}</Text>
                </View>
            </View>
            <View style={global.listView}>
                <View style={global.listHeader}><Text style={global.listHeaderText}>Image Location</Text></View>
                <View style={global.locationRow}>
                    <View style={global.locationRow}>
                        <Text>Longitude:</Text>
                        <Text>{long.toFixed(6)}</Text>
                    </View>
                    <View style={global.locationRow}>
                        <Text>Latitude:</Text>
                        <Text>{lat.toFixed(6)}</Text>
                    </View>
                </View>
            </View>
            <View style={global.listView}>
                <View style={global.listHeader}><Text style={global.listHeaderText}>Image Preview</Text></View>
                <View style={global.locationImage}>
                    {!!uri &&
                        <Image
                            style={{height: screen.width-60 / width * height, width: screen.width-60}}
                            source={{uri:uri}}
                        />
                    }
                </View>
            </View>
            <View style={global.actionButtonContainer}>
                <DualButton
                    leftColor={colors.primary}
                    rightColor={colors.accent}
                    leftButton={handleReset}
                    rightButton={() => navigation.goBack()}
                    leftText={'Reset'}
                    rightText={'Map View'}
                />
            </View>
        </View>
    )
}
export default Location
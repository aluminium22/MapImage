import React from "react";
import {View} from "react-native";
import {global} from "../styles/global";
import {Button} from "react-native-paper";

export const DualButton = ({leftColor, rightColor, leftButton, rightButton, leftText, rightText}) => {

    return (
        <View style={global.dualButtonContainer}>
            <Button
                style={global.dualButton}
                color={leftColor}
                mode={'contained'}
                onPress={leftButton}>
                {leftText}
            </Button>
            <Button style={global.dualButton}
                    color={rightColor}
                    mode={'contained'}
                    onPress={rightButton}>
                {rightText}
            </Button>
        </View>
    )
}
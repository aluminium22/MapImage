import {combineReducers} from 'redux';
import {
    UPDATE_COORDINATES,
    UPDATE_IMAGE,
    UPDATE_HEIGHT,
    UPDATE_WIDTH,
    UPDATE_NAME
} from "../actions/actions";




const initialState = {
    image: '',
    imageHeight: 0,
    imageWidth: 0,
    name:'',
    long: 0,
    lat: 0,
}

const appData  = (appData = initialState, action) => {
    switch (action.type) {
        case UPDATE_COORDINATES:
            return {
                ...appData,
                long: action.long,
                lat: action.lat
            }
        case UPDATE_IMAGE:
            return {
                ...appData,
                image: action.image
            }
        case UPDATE_HEIGHT:
            return {
                ...appData,
                height: action.height
            }
        case UPDATE_WIDTH:
            return {
                ...appData,
                width: action.width
            }
        case UPDATE_NAME:
            return {
                ...appData,
                name: action.name
            }
        default:
            return appData;
    }
}

export default combineReducers({ appData });

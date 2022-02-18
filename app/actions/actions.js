export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';
export const UPDATE_WORD = 'UPDATE_WORD';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_HEIGHT = 'UPDATE_HEIGHT';
export const UPDATE_WIDTH = 'UPDATE_WIDTH';

export const updateCoordinates = (lat, long) => (
    {
        type: UPDATE_COORDINATES,
        long,
        lat,
    }
    );

export const updateWord = (word) => (
    {
        type: UPDATE_WORD,
        word
    }
);

export const updateImage = (image) => (
    {
        type: UPDATE_IMAGE,
        image
    }
);
export const updateName = (name) => (
    {
        type: UPDATE_NAME,
        name
    }
);
export const updateWidth = (width) => (
    {
        type: UPDATE_WIDTH,
        width
    }
);
export const updateHeight = (height) => (
    {
        type: UPDATE_HEIGHT,
        height
    }
);
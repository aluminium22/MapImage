import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Location from '../screens/Location/Location';
import React from 'react';
const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Location" component={Location} />
        </Stack.Navigator>
    )
}
export default MyStack
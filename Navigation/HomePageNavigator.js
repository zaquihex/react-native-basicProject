import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomePageComponent from '../components/HomePageComponent';

const Stack = createStackNavigator();

export default  function HomePageNavigator() {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePageComponent" component={HomePageComponent} />
        </Stack.Navigator>

    );
}

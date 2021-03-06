import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import FormComponent from '../Screens/FormScreen';

const Stack = createStackNavigator();

export default function FormNavigator() {

    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FormComponent" component={FormComponent} />
        </Stack.Navigator>

    );
}

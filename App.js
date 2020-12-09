import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, Image, View, Text } from "react-native";
import HomePageNavigator from './Navigation/HomePageNavigator';
import Layout from './Components/Layout';
import FormNavigator from './Navigation/FormNavigator';
import {backgroundImage} from './config/styles';

const Example1 = () => (
    <Layout>
        <Text>Example1</Text>
    </Layout>
);
const Example2 = () => (
    <Layout>
        <Text>Example2</Text>
    </Layout>
);

export default function App() {
    const [infoApp, setInfoApp] = useState({});
    const AppContext = React.createContext();


  const Tab = createBottomTabNavigator();

    const StackNavigator = () => (
        <Tab.Navigator>
            <Tab.Screen
                name="HomePage"
                component={HomePageNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Form"
                component={FormNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="text" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

  return (
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  basicStylesScreen: {
      width: 100,
      height: 100,
      backgroundColor: 'orange'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: backgroundImage,
});
/*
<AppContext.Provider value={{ infoApp, setInfoApp }}>
      <View style={styles.container}>
          <Image style={styles.imageBackground} source={require("./assets/background.jpg")}></Image>
          <HomePage />
          <NavigationContainer theme={DefaultTheme}>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Welcome"
                      component={HomePage}
                      options={{ headerShown: false }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </View>
</AppContext.Provider>
<NavigationContainer theme={DefaultTheme}>
            <HomePage />
              <Tab.Navigator>
                  <Tab.Screen
                      name="Feed"
                      component={
                          <>
                              <Stack.Navigator mode="Listings" screenOptions={{ headerShown: false }}>
                                  <Stack.Screen name="Listings" component={
                                        <View style={styles.basicStylesScreen}>
                                            <Text>Holi1</Text>
                                        </View>
                                  } />
                                  <Stack.Screen name="ListingDetails" component={
                                      <View style={styles.basicStylesScreen}>
                                          <Text>Holi2</Text>
                                      </View>
                                  } />
                              </Stack.Navigator>
                          </>
                      }
                      options={{
                          tabBarIcon: ({ color, size }) => (
                              <MaterialCommunityIcons name="home" color={color} size={size} />
                          ),
                      }}
                  />
              </Tab.Navigator>
          </NavigationContainer>
*/

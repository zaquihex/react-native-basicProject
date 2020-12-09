import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Layout from '../Components/Layout';

function HomePageScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.imageBackground} source={require("../assets/background.jpg")}></Image>
            <Layout style={styles.titleView}>
                <Text style={styles.mainText}>Playing with react native</Text>
                <Text style={styles.suBText}>developed by Zaquiel Rodriguez Arce</Text>
            </Layout>
        </View>
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
    imageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    titleView: {
        alignItems: 'center'
    },
    mainText: {
        color: 'black',
        fontSize: 22,
        top: 50
    },
    suBText: {
        color: 'black',
        fontSize: 12,
        top: 50
    }
});

export default HomePageScreen;

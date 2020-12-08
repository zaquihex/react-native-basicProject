import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Layout from './Layout';

export default function HomePage(props) {
    return (
        <Layout>
            <View style={styles.container}>
               <Text style={styles.mainText}>Playing with react native</Text>
                <Text style={styles.suBText}>developed by Zaquiel Rodriguez Arce</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from './Layout';

function HomePageComponent(props) {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.mainText}>Playing with react native</Text>
                <Text style={styles.suBText}>developed by Zaquiel Rodriguez Arce</Text>
            </View>
        </Layout>);
}

const styles = StyleSheet.create({
    container: {}
});

export default HomePageComponent;

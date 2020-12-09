import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from './Layout';

function FormComponent(props) {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.mainText}>Screen with a simple form</Text>
            </View>
        </Layout>);
}

const styles = StyleSheet.create({
    container: {}
});

export default FormComponent;

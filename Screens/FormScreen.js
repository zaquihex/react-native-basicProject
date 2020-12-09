import React from 'react';
import { Formik, useFormikContext } from "formik";
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import Form from '../Components/Form';
import FormField from '../Components/FormField';

import * as Yup from "yup";

import Layout from '../Components/Layout';

function FormScreen() {

    const validationForm = Yup.object().shape({
        username: Yup.string().required().min(3).max(10),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    });

    const initialValues = {username: '', email: '', password: ''};

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>Screen with a simple form</Text>
                <View>
                    <Form
                        initialValues={initialValues}
                        validationSchema={validationForm}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                         <>
                             <FormField
                                 autoCapitalize="none"
                                 autoCorrect={false}
                                 keyboardType="email-address"
                                 name="username"
                                 placeholder="username"
                                 textContentType="username"
                             />
                            <FormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                name="email"
                                placeholder="Email"
                                textContentType="emailAddress"
                            />
                            <FormField
                                autoCorrect={false}
                                name="password"
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />
                             <Button title="Apply Form" onPress={(data)=>{console.log("data:", data);}} />
                        </>

                    </Form>
                </View>
                <View>
                    <Text style={styles.title}>Result of your form</Text>
                </View>
            </View>
        </Layout>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        height: '50%'
    }
});

export default FormScreen;

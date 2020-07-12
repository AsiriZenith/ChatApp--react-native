import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Label, Grid, Row } from 'native-base';
// import GenerateForm from 'react-native-form-builder';

import Layout from '../constants/Layout';
import color from "../style/color";

const RegisterScreen = ({ params, navigation }) => {
    return (
        <Container>
            <Content>
                <Grid>
                    <Row style={{ height: Layout.height * 0.2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, marginTop: 60 }}>Register Here</Text>
                    </Row>
                    <Row style={{ height: Layout.height * 0.5}}>
                        <Form style={{ flex: 1, marginHorizontal: 15, justifyContent: 'space-evenly'}}>
                            <Item rounded style={{ borderColor: color.MISCHKA }}>
                                <Input placeholder='name'/>
                            </Item>
                            <Item rounded style={{ borderColor: color.MISCHKA }}>
                                <Input placeholder='age'/>
                            </Item>
                            <Item rounded style={{ borderColor: color.MISCHKA }}>
                                <Input placeholder='gender'/>
                            </Item>
                            <Item rounded style={{ borderColor: color.MISCHKA }}>
                                <Input placeholder='password'/>
                            </Item>
                            <Item rounded style={{ borderColor: color.MISCHKA }}>
                                <Input placeholder='Confirm password'/>
                            </Item>
                        </Form>
                    </Row >
                    <Row style={{ height: Layout.height * 0.2, alignItems: 'center', justifyContent: 'center', paddingHorizontal:75 }}>
                        <Button style={{ borderRadius: 25, flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: color.white }}>Register</Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default RegisterScreen;

const styles = {
    wrapper: {
        flex: 1,
        marginTop: 150,
    },
    submitButton: {
        paddingHorizontal: 10,
        paddingTop: 20,
    },
};
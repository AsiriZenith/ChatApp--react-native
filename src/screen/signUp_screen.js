import React from "react"
import { Text, StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Grid, Row, Button } from 'native-base'
import Layout from "../constants/Layout"
import color from "../style/color"

const SignUp = ({ route, navigation }) => {
    return (
        <Container>
            <Content>
                <Grid>
                    <Row style={{ height: Layout.height * 0.1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 60 }}>Register Here</Text>
                    </Row>
                    <Row style={{ height: Layout.height * 0.7 }}>
                        <Form style={{ flex: 1, marginHorizontal: 20, justifyContent: 'space-evenly' }}>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='Name' />
                            </Item>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='Nic Name' />
                            </Item>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='email' />
                            </Item>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='password' />
                            </Item>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='Confirm password' />
                            </Item>
                        </Form>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default SignUp

const styles = StyleSheet.create({
    rowStyle1: {
        height: Layout.height * 0.3,
        fontWeight: 'bold',
        marginTop: 60
    }
})
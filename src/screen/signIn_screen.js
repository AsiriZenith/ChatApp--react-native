import React from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Button, Content, Form, Item, Input, Label, Grid, Row } from "native-base";
import Layout from "../constants/Layout";
import color from "../style/color";

const SignIn = ({ params, navigation }) => {
    //const [val1, setval] = React.useState('akith')

    return (
        <Container>
            <Content>
                <Grid>
                    <Row style={{ height: Layout.height * 0.3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 60 }}>CHAT APP</Text>
                    </Row>
                    <Row style={{ height: Layout.height * 0.3 }}>
                        <Form style={{ flex: 1, marginHorizontal: 20, justifyContent: 'space-evenly' }}>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='username' />
                            </Item>
                            <Item rounded style={{ borderColor: color.black }}>
                                <Input placeholder='password' />
                            </Item>
                        </Form>
                    </Row>
                    <Row style={{ height: Layout.height * 0.2, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 75 }}>
                        <Button style={{ borderRadius: 25, flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: color.white }}>Sign In</Text>
                        </Button>
                    </Row>
                    <Row style={{ height: Layout.height * 0.1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Don't have a acoount? </Text>
                        <Item onPress={() => navigation.push('Register Screen')}>
                            <Text style={{ color: color.DODGER_BLUE }}>register now</Text>
                        </Item>
                    </Row>
                </Grid>
            </Content>
        </Container>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    frm: {
        flex: 1,
        height: 100,
        // width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        paddingHorizontal: 10,
        paddingTop: 20,
    },
})
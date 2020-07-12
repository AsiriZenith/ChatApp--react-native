import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { render } from 'react-dom'
 
export default class GroupScreen extends Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.Text}><Text>Group Screen</Text></View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    Text:{
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold' 
    }
})

//export default GroupScreen
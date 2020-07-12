import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
 
function ChatScreen(){
    return(
        <View style={style.container}>
            <View style={style.Text}><Text>Chat Screen</Text></View>
        </View>
    )
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

export default ChatScreen
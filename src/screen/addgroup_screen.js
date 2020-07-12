import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
 
function AddGroupScreen(){
    return(
        <View style={style.container}>
            <View style={style.Text}><Text>Add Group Screen</Text></View>
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

export default AddGroupScreen
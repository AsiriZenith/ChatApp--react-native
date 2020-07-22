import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import GroupScreen from '../screen/group_screen'
import AddGroupScreen from '../screen/addgroup_screen'
import ChatScreen from '../screen/chat_screen'
import SignIn from '../screen/signIn_screen'
import SignUp from '../screen/signUp_screen'

const Stack = createStackNavigator()

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignIn Screen"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Group Screen"
                    component={GroupScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Add Group Screen"
                    component={AddGroupScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Chat Screen"
                    component={ChatScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register Screen"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

// Se importan las screens.
import OnBoarding from "../Components/Onboarding";
import staticscreen from "../Screens/StaticScreen";
import Login from "../Screens/Login";
import Register from "../Screens/Register";



const Stack = createStackNavigator();

export default function NoAuthRoutes()
{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="onboarding" screenOptions={{headerShown:false}}>
                <Stack.Screen component={OnBoarding} name="onboarding"/> 
                <Stack.Screen component={staticscreen} name="static"/>
                <Stack.Screen component={Login} name="login"/>
                <Stack.Screen component={Register} name="register"/> 
 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
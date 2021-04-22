import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

const Drawer= createDrawerNavigator();
const Stack= createStackNavigator();
const Navigator=()=>{
    return(
        <SafeAreaView style={{flex:1,paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0}}>
        <NavigationContainer initialRouteName="HOME">
            <Drawer.Navigator>
                <Drawer.Screen name="HOME" component={Home}/>
            </Drawer.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigator;
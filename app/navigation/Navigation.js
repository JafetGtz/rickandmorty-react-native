import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-elements';
import Home from './../Screens/Home';
import Details from './../Screens/Details';
import Search from './../Screens/SearchCharapters'
import Followers from './../Screens/Followers';

import Icon from 'react-native-vector-icons/FontAwesome';
const HomeStack = createStackNavigator();



const HomeStackScreen = ({ }) => (
    <HomeStack.Navigator >
        <HomeStack.Screen name="Home" component={Home} options={
            {
                headerRight: () => {
                    return (<View style={{ paddingRight: 10 }}><Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                    /></View>)
                },
                headerTitle: "Personajes",
                headerStyle: { backgroundColor: "#FFE8DA" }
            }} />
        <HomeStack.Screen name="Details" component={Details}
            options={
                {
                    headerTitle: "Detalles",
                    headerStyle: { backgroundColor: "#7DDFC3" }
                }}
        />
    </HomeStack.Navigator>
)


const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={Search} options={
            {
                headerTitle: "buscador",
                headerStyle: { backgroundColor: "#A5AFFB" }
            }}

        />
    </SearchStack.Navigator>
)




const FollowersStack = createStackNavigator();

const FollowStackScreen = () => (
    <FollowersStack.Navigator>
        <FollowersStack.Screen name="Follow" component={Followers} options={
            {
                headerTitle: "Siguiendo a:",
                headerStyle: { backgroundColor: "#0084F4" }
            }}

        />
    </FollowersStack.Navigator>
)

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen name="Inicio" component={HomeStackScreen}    options={{
            tabBarIcon: ()=> <Icon name="home" size={20} color="#FF647C" />
        }} />
        <AppTabs.Screen name="Buscar" component={SearchStackScreen} 
        options={{
            tabBarIcon: ()=> <Icon name="search" size={20} color="#FF647C" />
        }} 
        />
        <AppTabs.Screen name="Followers" component={FollowStackScreen} 
        options={{
            tabBarIcon: ()=> <Icon name="users" size={20} color="#FF647C" />
        }} 
        />
    </AppTabs.Navigator>
)


export default () => (
    <NavigationContainer>
        <AppTabsScreen />
    </NavigationContainer>
)
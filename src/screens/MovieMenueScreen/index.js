
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { BackIcon, SearchIcon, ProfileImage, SettingIcon, HeartIcon, ExpandIcon, HeartWithoutFillIcon, MessageIcon, SortingIcon, HomeIcon } from '../../assets'
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField'
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CastScreen from '../CastScreen';
import SocialScreen from '../SocialScreen';
import ChatHeader from "../../components/ChatHeader";
import ScriptScreen from "../ScriptScreen";
import MusicScreen from "../MusicScreen";

const Tab = createMaterialTopTabNavigator();
export default MovieMenueScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ChatHeader
                singleLeftIcon={HomeIcon}
                rightIcon={SortingIcon}
                backIconPress={() => { navigation.goBack() }}
            />
            <View style={{ flex: 1, backgroundColor: Colors.appBlack, borderRadius: 16 }}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: { fontSize: 12, fontWeight: "400", color: Colors.white, backgroundColor: Colors.appBlack, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 },
                        tabBarStyle: { backgroundColor: Colors.appBlack, },
                        tabBarIndicatorStyle: { backgroundColor: Colors.white, height: 1, borderColor: Colors.white },
                        tabBarScrollEnabled: true,
                        tabBarItemStyle: { width: 85, padding: 0 }
                    }}
                >
                    <Tab.Screen
                        name="Timeline"
                        component={CastScreen}
                    />
                    <Tab.Screen
                        name="Cast"
                        component={CastScreen}
                        options={{ tabBarLabel: "Cast" }}

                    />
                    <Tab.Screen
                        name="SocialScreen"
                        component={SocialScreen}
                        options={{ tabBarLabel: "Social" }}

                    />
                    <Tab.Screen
                        name="ScriptScreen"
                        component={ScriptScreen}
                        options={{ tabBarLabel: "Script" }}

                    />
                    <Tab.Screen
                        name="MusicScreen"
                        component={MusicScreen}
                        options={{ tabBarLabel: "Music" }}

                    />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    )

}
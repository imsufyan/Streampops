
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { BackIcon, SearchIcon, ProfileImage, SettingIcon, HeartIcon, ExpandIcon, HeartWithoutFillIcon, MessageIcon } from '../../assets'
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField'
import styles from './styles';


export default EditProfileScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftView}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} style={styles.backArrowView}>
                        <Image source={BackIcon} style={styles.backIconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>{`Chris Nichols`}</Text>
                </View>
                <TouchableOpacity style={styles.rightView}>
                    <Image source={SearchIcon} style={styles.backIconStyle} />
                </TouchableOpacity>
            </View>

            <View style={styles.profileView}>
                <View style={styles.profileImageView}>
                    <View style={styles.imageView}>
                        <Image source={ProfileImage} style={styles.profileImageStyle} />
                        {/* <Text style={styles.profileTitleStyle}>{`Chris Nichols`}</Text> */}
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                        <Text>{`profile.png`}</Text>
                        <TouchableOpacity style={styles.changeImageView}>
                            <Text style={styles.changeImageText}>{`Change Image`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginVertical: 5, marginTop: 20 }}>
                    <InputField
                        containerStyle={styles.inputStyle}
                        placeholder={'Name'}
                    />
                </View>
                <View style={{ marginVertical: 5, marginTop: 20 }}>
                    <InputField
                        containerStyle={styles.inputStyle}
                        placeholder={'Bio'}
                    />
                </View>
                <View style={styles.interestsView}>
                    <View style={styles.absoluteView}>
                        <Text style={styles.interestHeading}>{`Interests`}</Text>
                    </View>
                    <View style={styles.interestListStyle}>
                        {['terror', 'comedy', 'action'].map((item, index) => {
                            return (
                                <View style={styles.interestListView}>
                                    <Text>{item}</Text>
                                    <TouchableOpacity style={{ marginLeft: 5 }}>
                                        <Text>{'X'}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                        }
                    </View>
                </View>
                <TouchableOpacity style={styles.saveButtonStyle} onPress={() => navigation.navigate("MovieMenueScreen")}>
                    <Text style={styles.saveText}>{`Save`}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )

}
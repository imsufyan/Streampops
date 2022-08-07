
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { BackIcon, SearchIcon, ProfileImage, SettingIcon, HeartIcon, ExpandIcon, HeartWithoutFillIcon, MessageIcon } from '../../assets'
import { Colors } from '../../utils/Colors';
import styles from './styles';


export default UserProfileScreen = ({ navigation }) => {

    const [commentsList, setCommentsList] = useState([
        { movie: "Pulpfiction", comment: "This scene always makes me hungry", like: "5", message: "2", time: '00:04:32' },
        { movie: "The Hobbit", comment: "I like the way they have created this scene", like: "200", message: "186", time: '00:35:02' },
        { movie: "The Hobbit", comment: "This makes me feel a lot of scare", like: "200", message: "186", time: '00:35:02' },
    ])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftView}>
                    <TouchableOpacity style={styles.backArrowView}>
                        <Image source={BackIcon} style={styles.backIconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>{`Chris Nichols`}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SearchScreen')
                }} style={styles.rightView}>
                    <Image source={SearchIcon} style={styles.backIconStyle} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.profileView}>
                    <View style={styles.profileImageView}>
                        <View style={styles.imageView}>
                            <Image source={ProfileImage} style={styles.profileImageStyle} />
                            <Text style={styles.profileTitleStyle}>{`Chris Nichols`}</Text>
                        </View>
                        <View style={styles.commentsSection}>
                            <View>
                                <Text style={styles.commentsCountText}>{`315`}</Text>
                                <Text style={styles.commentsTextStyle}>{`Comments`}</Text>
                            </View>
                            <View>
                                <Text style={styles.commentsCountText}>{`315`}</Text>
                                <Text style={styles.commentsTextStyle}>{`Followes`}</Text>
                            </View>
                            <View>
                                <Text style={styles.commentsCountText}>{`315`}</Text>
                                <Text style={styles.commentsTextStyle}>{`Following`}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('EditProfileScreen')
                        }} style={styles.settingIconView}>
                            <Image source={SettingIcon} style={styles.settingIconStyle} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.interustType}>{`I like comedy, action and thrillers. I do standup`}</Text>
                    <Text style={styles.interestHeading}>{`Interests`}</Text>
                    <View style={styles.interestListStyle}>
                        {['terror', 'comedy', 'action'].map((item, index) => {
                            return (
                                <View style={styles.interestListView}>
                                    <Text>{item}</Text>
                                </View>
                            )
                        })
                        }
                    </View>
                </View>
                <View style={styles.popularCommentsView}>
                    <Text style={styles.popularCommentsText}>{`Popular comments`}</Text>
                    <Image source={HeartIcon} style={styles.heartIconStyle} />
                </View>
                {commentsList.map((item, index) => {
                    return (
                        <View style={{ marginHorizontal: 10, }}>
                            <Text
                                style={styles.popularCommentsText}>
                                {`About `}
                                <Text style={{ color: Colors.appText }}>{item.movie}</Text>
                            </Text>
                            <View style={styles.commentsContainer}>
                                <View style={styles.rowView}>
                                    <Text style={styles.profileTitleBlueStyle}>{`Chris Nichols`}</Text>
                                    <Image source={ExpandIcon} style={styles.expandIconStyle} />
                                </View>
                                <Text style={styles.interustType}>{`${item.comment}`}</Text>
                                <View style={styles.rowView}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={HeartWithoutFillIcon} style={styles.HeartWithoutFillIcon} />
                                            <Text style={styles.commentsTextStyle}>{`${item.like}`}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                            <Image source={MessageIcon} style={styles.HeartWithoutFillIcon} />
                                            <Text style={styles.commentsTextStyle}>{`${item.message}`}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.commentsTextStyle}>{`${item.time}`}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )

}
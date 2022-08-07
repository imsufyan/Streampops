
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Platform, Pressable, FlatList } from 'react-native';
import { BackIcon, SearchIcon, ProfileImage, SettingIcon, HeartIcon, ExpandIcon, HeartWithoutFillIcon, MessageIcon, SendIcon, SortingIcon, HomeIcon } from '../../assets'
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField';
import styles from './styles';
import ChatHeader from "../../components/ChatHeader";


export default LiveStreamingScreen = ({ navigation }) => {

    const [comment, setComment] = useState()
    const [commentsList, setCommentsList] = useState([
        { name: 'Rob', comment: 'I love Harry’s face when he see his fortune', like: '5', message: '20' },
        { name: 'Tom', comment: 'I want to be him right now', like: '1', message: '1' },
        { name: 'Martin', comment: 'My skin is chicken like', like: '5', message: '20' },
        { name: 'Martin', comment: 'My skin is chicken like', like: '5', message: '20' },
        { name: 'Martin', comment: 'My skin is chicken like', like: '5', message: '20' },
        { name: 'Martin', comment: 'My skin is chicken like', like: '5', message: '20' },
    ])


    const _renderItem = ({ item, index }) => {


        return (
            <View style={styles.commentsContainer}>
                <View style={styles.rowView}>
                    <Text style={styles.profileTitleBlueStyle}>{`${item.name}`}</Text>
                    {/* <Image source={ExpandIcon} style={styles.expandIconStyle} /> */}
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
                    <Text style={styles.commentsTextStyle}>{`00:30:32`}</Text>
                </View>
            </View>
        )
    }

    const renderListing = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={commentsList}
                extraData={commentsList}
                onEndReachedThreshold={0.3}
                onEndReached={() => { }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ borderWidth: 1 }}></View>
                    )
                }}
                renderItem={_renderItem}
            />
        );
    };

    return (
        <View style={styles.container}>
            <ChatHeader
                singleLeftIcon={HomeIcon}
                rightIcon={SortingIcon}
                backIconPress={() => { navigation.goBack() }}
            />
            <View style={{ flex: 1 }}>

                {<View style={{ backgroundColor: Colors.white, flex: 1, margin: 10, borderRadius: 10 }}>
                    {renderListing()}
                </View>}
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={50}
                    style={{ width: '100%', marginBottom: 30 }}>
                    <View style={styles.inputMainContainer}>
                        <TextInput
                            value={comment}
                            selectionColor={'#009491'}
                            placeholder={'Comment'}
                            style={styles.inputStyles}
                            onChangeText={(text) => {
                                setComment(text)
                            }}
                        />
                        <Pressable
                            style={styles.sendButton}
                        // onPress={onSendMessage}
                        >
                            <Image source={SendIcon} style={styles.breakingImageStyle} />
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    )

}
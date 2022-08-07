
import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackIcon, SearchIcon, AudioIcon, DownIcon, StarIcon, BreakingIcon, HeartIcon, ExpandIcon, HeartWithoutFillIcon, MessageIcon, HobbitBanner, BreakingNews, ImageBackgroundSecond } from '../../assets'
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField'
import styles from './styles';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('window');
var _scrollToBottomY = 0

export default SearchScreen = ({ navigation }) => {

    const [showBottomView, setShowBottomView] = useState(false);
    const [videoList, setVideoList] = useState([
        { type: 'movie', image: HobbitBanner, tagline: 'Recomended for you', name: 'The Hobbit', movieDescription: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.' },
        { type: 'news', },
        { type: 'movie', image: ImageBackgroundSecond, tagline: 'Popular movie', name: 'Non Stop', movieDescription: 'An air marshal springs into action during a transatlantic flight after receiving a series of text messages demanding $150 million into an off-shore account, or someone will die every 20 minutes.' },
        { type: 'comments', name: 'The Hobbit', userName: 'Maria', comment: 'what is going on here', like: '25', message: '33' },
        { type: 'comments', name: 'Harry Potter and the Philosopher Stone', userName: 'Carlos', comment: 'This scene always makes me hungry', like: '5', message: '2' }
    ]);

    const scrollViewRef = useRef()

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftView}>
                    <Text style={styles.titleStyle}>{`STREAMPOPS`}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} style={styles.rightView}>
                    <Text style={styles.rightTextStyle}>{`Login`}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    _scrollToBottomY = contentHeight;
                }}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
                showsVerticalScrollIndicator={false}
            >
                <LinearGradient
                    style={{ height: (height - responsiveHeight(8.7)) }}
                    colors={['#131313', '#004280']}
                >
                    <Text style={styles.searchWatchingText}>{`Search what I’m watching`}</Text>
                    <View style={styles.rowViewInput}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder={`Search`}
                        />
                        <TouchableOpacity style={styles.saveButtonStyle}>
                            <Image source={SearchIcon} style={styles.backIconStyle} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.listenWatchingText}>{`Listen what I’m watching`}</Text>
                    <TouchableOpacity style={styles.audioButtonStyle}>
                        <Image source={AudioIcon} style={styles.backIconStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            scrollViewRef?.current.scrollToEnd({ animated: true });
                        }}
                        style={{ alignSelf: "center", position: "absolute", bottom: 50 }}>
                        <Image source={DownIcon} style={styles.downIconStyle} />
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ paddingTop: 100, backgroundColor: Colors.appBlack, marginHorizontal: 10 }}>
                    {videoList.map((item, index) => {
                        return (
                            item.type == 'movie' ?
                                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate("MovieMenueScreen")}>
                                    <Image source={HobbitBanner} style={styles.hobbitBannerImage} />
                                    <View style={styles.movieDescriptionView}>
                                        <View style={styles.recomendedTextRow}>
                                            <Text style={styles.recomendedText}>{`${item.tagline}`}</Text>
                                            <Image source={StarIcon} style={styles.starIcon} />
                                        </View>
                                        <Text style={styles.movieDescriptionText}>{`${item.movieDescription}`}</Text>
                                    </View>
                                </TouchableOpacity>
                                : item.type == 'news' ?
                                    <>
                                        <View style={styles.popularCommentsView}>
                                            <Text style={styles.breakingNewsText}>{`Breaking news`}</Text>
                                            <Image source={BreakingIcon} style={styles.breakingIconStyle} />
                                        </View>
                                        <View style={{
                                            padding: 10,
                                            flexDirection: 'row',
                                            backgroundColor: Colors.white,
                                            borderRadius: 10
                                        }}>
                                            <View style={{ flex: 1 }}>
                                                <Text>{`https://rollingstone.uol.com.br › harr...`}</Text>
                                                <Text style={{
                                                    color: Colors.blue,
                                                    marginVertical: 10
                                                }}>{`Harry Potter: Emma Watson se obrigou a 'lembrar de atuar ...`}</Text>
                                                <Text style={{
                                                    color: Colors.appBlack
                                                }}>{`Apr 8, 2022 — Emma Watson confessou ...`}</Text>
                                            </View>
                                            <Image source={BreakingNews} style={styles.breakingImageStyle} />
                                        </View>
                                    </>
                                    :
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('LiveStreamingScreen')
                                    }}>
                                        <View style={styles.popularCommentsView}>
                                            <Text style={styles.popularCommentsText}>{`Popular comments`}</Text>
                                            <Image source={HeartIcon} style={styles.heartIconStyle} />
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text
                                                style={styles.popularCommentsText}>
                                                {`About `}
                                                <Text style={{ color: Colors.appText }}>{`${item.name}`}</Text>
                                            </Text>
                                            <View style={styles.commentsContainer}>
                                                <View style={styles.rowView}>
                                                    <Text style={styles.profileTitleBlueStyle}>{`${item.userName}`}</Text>
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
                                                    <Text style={styles.commentsTextStyle}>{`00:30:32`}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        scrollViewRef?.current.scrollTo(_scrollToBottomY);
                    }}
                    style={{ alignSelf: "center" }}>
                    <Image source={DownIcon} style={[styles.upIconStyle]} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )

}
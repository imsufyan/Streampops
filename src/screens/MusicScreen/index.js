
import React, { useState } from 'react';
import { SafeAreaView, Image, FlatList, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField'
import styles from './styles';
import {
    FirstPlaceholder,
    SecondPlaceholder,
    ThirdPlaceholder,
    ProfileInstagram,
    TwitterIcon,
    TwitterThumb,
    MessageIcon,
    HeartWithoutFillIcon,
    ExpandIcon,
    BreakingNews,
    BreakingIcon,
    NewsImage,
    SocialPhoto,
    SingerImage1,
    SingerImage2,
    MusicAudioIcon
} from "../../assets/index";


export default MusicScreen = ({ navigation }) => {
    const [listOfCast, setListOfCast] = useState([{ url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" }])

    const [musicList, setMusicList] = useState([
        { name: 'Harry in Winter', tagLine: 'Patrick Doyle', image: SingerImage1 , duration: "1:30:05" },
        { name: 'Buckbeak’s flight', tagLine: 'John WIlliams', image: SingerImage2 , duration: "1:30:05" },

    ])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewStyle}
            >
                {musicList.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                setShowScript(true)
                            }}
                            style={styles.scriptListView}>
                            <>
                                <Image source={item.image} style={styles.musicImage} />
                                <View style={{ flex: 1 , marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, color: Colors.appBlack }}>{item.name}</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1,marginTop: 10,marginEnd: 10 }}>
                                        <Text>{item.tagLine}</Text>
                                        <Image source={MusicAudioIcon} style={{width: 20,height: 20,resizeMode: 'contain',}} />
                                    </View>
                                </View>
                            </>
                            <Text style={{alignSelf: 'center'}}>{item.duration}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </SafeAreaView >
    )
}
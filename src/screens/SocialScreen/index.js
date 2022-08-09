
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
    SocialPhoto
} from "../../assets/index";


export default SocialScreen = ({ navigation }) => {
    const [listOfCast, setListOfCast] = useState([{ url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" }])

    const [profileOptions, setProfileOptions] = useState([
        'Social', 'News', 'Bio'
    ])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewStyle}
            >
                <View style={{
                    backgroundColor: Colors.white,
                    padding: 10,
                    borderRadius: 10,
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <Image source={TwitterThumb} style={styles.twitterThumb} />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.twitterTitle}>{`Emma wstson`}</Text>
                                    <Text style={styles.twitterId}>{`@EmmaWatson`}</Text>
                                </View>
                                <Image source={SocialPhoto} style={[styles.instaPhot,{marginTop: 10}]} />
                                <Text style={{ lineHeight: 22, marginTop: 10 }}>{`Professor McGonagall was right, we all know his name ⚡ Which Harry Potter film will you be watching this #InternationalHarryPotterDay?`}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1, marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Image source={HeartWithoutFillIcon} style={styles.HeartWithoutFillIcon} />
                                            <Text style={styles.commentsTextStyle}>{`5`}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                            <Image source={MessageIcon} style={styles.HeartWithoutFillIcon} />
                                            <Text style={styles.commentsTextStyle}>{`5`}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.twitterId}>{`May 17, 2021`}</Text>
                                </View>
                            </View>
                        </View>
                        <Image source={TwitterIcon} style={styles.twitterIcon} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
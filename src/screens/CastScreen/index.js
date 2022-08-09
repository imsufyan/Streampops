
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
    ExpandIcon
} from "../../assets/index";


export default CastScreen = ({ navigation }) => {
    const [listOfCast, setListOfCast] = useState([{ url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" }])

    const [profileOptions, setProfileOptions] = useState([
        'Social', 'News', 'Bio'
    ])

    const [activeIndex, setActiveIndex] = useState(-1)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileInnerOptions}>
                {profileOptions.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            setActiveIndex(index)
                        }} style={{}}>
                            <Text style={{ marginHorizontal: 30, color: activeIndex == index ? Colors.white : Colors.appGray }}>{item}</Text>
                            {index !== 0 && <View style={{ borderLeftWidth: 1, height: 20, position: "absolute", borderColor: Colors.appGray }}></View>}
                        </TouchableOpacity>
                    )
                })
                }
            </View>

            {activeIndex == 0 ?
                <View style={{ flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 , marginHorizontal: 10 , marginTop: 20 }}
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
                                        <Text style={{ lineHeight: 22, marginTop: 10 }}>{`Dear Fans,Rumours about wheter I’m engaged or not, or whether my career is “dormant or not” are ways to create clicks each time they are revealed to be true or untrue`}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 ,marginTop: 10}}>
                                            <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Image source={HeartWithoutFillIcon} style={styles.HeartWithoutFillIcon} />
                                                        <Text style={styles.commentsTextStyle}>{`5`}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: "row",marginLeft: 10 }}>
                                                        <Image source={MessageIcon} style={styles.HeartWithoutFillIcon} />
                                                        <Text style={styles.commentsTextStyle}>{`5`}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: "row",marginLeft: 10 }}>
                                                        <Image source={ExpandIcon} style={styles.HeartWithoutFillIcon} />
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
                        <View style={{
                            backgroundColor: Colors.white,
                            padding: 10,
                            borderRadius: 10,
                            marginVertical: 10
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <Image source={ThirdPlaceholder} style={styles.twitterThumb} />
                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={styles.twitterTitle}>{`Emma wstson`}</Text>
                                            <Text style={styles.twitterId}>{`@EmmaWatson`}</Text>
                                        </View>
                                        <View style={{flex: 1 ,marginTop: 10}}>
                                            <Image source={ProfileInstagram} style={styles.instaPhot} />
                                        </View>
                                    </View>
                                </View>
                                <Image source={TwitterIcon} style={styles.twitterIcon} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                :
                <FlatList
                    style={{ marginTop: 20 }}
                    data={listOfCast}
                    extraData={listOfCast}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1 / 3, height: 150, borderColor: Colors.white, borderWidth: 1, margin: 5, }}>
                                <Image source={item.url} style={{ height: "70%", width: "100%", resizeMode: "stretch" }} />
                                <View style={{ height: "30%", width: "100%", backgroundColor: Colors.white }}>
                                    <Text style={{ fontSize: 15, fontWeight: "400", color: Colors.appBlack, textAlign: "center" }}>{item.realName}</Text>
                                    <Text style={{ fontSize: 15, fontWeight: "400", color: Colors.appBlack, textAlign: "center" }}>{item.castName}</Text>
                                </View>
                            </View>
                        )
                    }
                    }
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            }
        </SafeAreaView >
    )
}

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


export default ScriptScreen = ({ navigation }) => {
    const [listOfCast, setListOfCast] = useState([{ url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" }])

    const [scriptList, setScriptList] = useState([
        'English', 'Spanish', 'Chinese', 'French'
    ])

    const [showScript, setShowScript] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);

    const [profileOptions, setProfileOptions] = useState([
        'Eng', 'Spa', 'Fre', 'Chi'
    ])

    return (
        <SafeAreaView style={styles.container}>
            {showScript ?
                <>
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
                    <View style={{ 
                        flex: 1 ,
                        backgroundColor: Colors.white,
                        margin: 10,
                        padding: 10,
                        borderRadius: 5
                        }}>
                        <ScrollView>
                            <Text>{`Oliver: Quidditch is easy enough to understand. Each time has seven players, 3 chasers, 2 beaters, 1 keeper and a seeker. That's you. There are three kinds of balls.This one's called the Quaffle. Now, the chasers handle the Quaffle and try to put it through one of those three hoops. The keeper, that's me, defends the hoops. With me so far?

Harry: I think so. What are those?

Oliver: You better take this. Careful now, it's comin' back. Eh, not bad, Potter, you'd make a fair beater... Uh-oh.

Harry: What is that?

Oliver: Bludger. Nasty little buggers. But you are the seeker, and the only thing I want you to worry about is this... the Golden Snitch.

Harry: I like this ball.

Oliver: Ah, you like it now. Just wait. It's wicked fast and damn near impossible to see.

Harry: What do I do with it?

Oliver: You catch it... before the other team's seeker. You catch this, the game is over. You catch this, Potter, and we win.`}</Text>
                        </ScrollView>
                    </View>
                </>
                :
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewStyle}
                >
                    {scriptList.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    setShowScript(true)
                                }}
                                style={styles.scriptListView}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: Colors.appBlack }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            }

        </SafeAreaView >
    )
}
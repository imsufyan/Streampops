
import React, { useState } from 'react';
import { SafeAreaView, Image, FlatList, View, Text } from 'react-native';
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField'
import styles from './styles';
import { FirstPlaceholder, SecondPlaceholder, ThirdPlaceholder } from "../../assets/index";
export default CastScreen = ({ navigation }) => {
    const [listOfCast, setListOfCast] = useState([{ url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" }])

    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView >
    )
}

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
    NewsImage
} from "../../assets/index";


export default CastScreen = ({ navigation }) => {
    const [listOfCast, setListOfCast] = useState([{ url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" },
    { url: FirstPlaceholder, realName: "Danield Rad...", castName: "Harry Potter" }, { url: SecondPlaceholder, realName: "Rupert Grint", castName: "Roon Wesliey" }, { url: ThirdPlaceholder, realName: "Ema Watson", castName: "Hermione Gra" }])

    const [profileOptions, setProfileOptions] = useState([
        'Social', 'News', 'Bio'
    ])

    const [activeIndex, setActiveIndex] = useState(-1);

    const [newsList, setNewsList] = useState([
        { image: NewsImage, url: "https://www.purepeople.com.br", blueText: 'Emma Watson - Fotos, últimas notícias, idade, signo...', description: "Emma Watson é conhecida por seu papel como Hermione Gra..." },
        { image: BreakingNews, url: "https://rollingstone.uol.com.br › harr...", blueText: `Harry Potter: Emma Watson se obrigou a 'lembrar de atuar ...`, description: "Apr 8, 2022 — Emma Watson confessou ..." },
        { image: NewsImage, url: "https://www.purepeople.com.br", blueText: 'Emma Watson - Fotos, últimas notícias, idade, signo...', description: "Emma Watson é conhecida por seu papel como Hermione Gra..." },
        { image: BreakingNews, url: "https://rollingstone.uol.com.br › harr...", blueText: `Harry Potter: Emma Watson se obrigou a 'lembrar de atuar ...`, description: "Apr 8, 2022 — Emma Watson confessou ..." },
    ])

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
                                        <Text style={{ lineHeight: 22, marginTop: 10 }}>{`Dear Fans,Rumours about wheter I’m engaged or not, or whether my career is “dormant or not” are ways to create clicks each time they are revealed to be true or untrue`}</Text>
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
                                                <View style={{ flexDirection: "row", marginLeft: 10 }}>
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
                                        <View style={{ flex: 1, marginTop: 10 }}>
                                            <Image source={ProfileInstagram} style={styles.instaPhot} />
                                        </View>
                                    </View>
                                </View>
                                <Image source={TwitterIcon} style={styles.twitterIcon} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                : activeIndex == 1 ?
                    <ScrollView
                        contentContainerStyle={styles.scrollViewStyle}
                        showsVerticalScrollIndicator={false}
                    >
                        {newsList.map((item, index) => {
                            return (
                                <>
                                    <View style={{
                                        padding: 10,
                                        flexDirection: 'row',
                                        backgroundColor: Colors.white,
                                        borderRadius: 10,
                                        marginTop: 10
                                    }}>
                                        <View style={{ flex: 1 }}>
                                            <Text>{item.url}</Text>
                                            <Text style={{
                                                color: Colors.blue,
                                                marginVertical: 10
                                            }}>{item.blueText}</Text>
                                            <Text style={{
                                                color: Colors.appBlack
                                            }}>{item.description}</Text>
                                        </View>
                                        <Image source={item.image} style={styles.breakingImageStyle} />
                                    </View>
                                </>
                            )
                        })}
                    </ScrollView>
                    : activeIndex == 2 ?

                        <ScrollView
                            contentContainerStyle={styles.scrollViewStyle}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{
                                backgroundColor: Colors.white,
                                borderRadius: 10,
                                padding: 10
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <View style={{ flex: 1 }}>
                                        <Image source={ThirdPlaceholder} style={styles.newsImage} />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: Colors.lightWhite,
                                        padding: 10,
                                        marginLeft: 5,
                                        borderRadius: 5
                                    }}>
                                        <Text style={styles.twitterTitle}>{`Emma wstson`}</Text>
                                        <Text style={styles.birthDayTitle}>{`Birth date: april 15, 1990 (32 years)`}</Text>
                                        <Text style={styles.birthDayTitle}>{`Nationality: British`}</Text>
                                        <Text style={styles.birthDayTitle}>{`Occupation: Actress, Model and activist`}</Text>
                                    </View>
                                </View>
                                <Text style={{lineHeight: 23,marginVertical :10}}>{`Emma Charlotte Duerre Watson (Paris, 15 de abril de 1990) é uma atriz, modelo e ativista britânica nascida na França, conhecida mundialmente por ter atuado na série de filmes Harry Potter, que serviram como adaptação para o cinema da série de livros homônima da escritora J. K. Rowling. Watson foi escolhida para interpretar Hermione aos dez anos de idade, sem nunca antes ter atuado profissionalmente, tendo atuado apenas em peças de teatro da sua escola. Por seu trabalho em Harry Potter, ela recebeu diversos prêmios e ganhou mais de 26 milhões de libras esterlinas.Em busca de outros projetos para se firmar como atriz, Watson fez seu primeiro trabalho fora da série Harry Potter no telefilme Ballet Shoes (2007), que obteve uma audiência de 5,2 milhões de espectadores durante sua exibição original no canal BBC One.`}</Text>
                            </View>
                        </ScrollView>
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
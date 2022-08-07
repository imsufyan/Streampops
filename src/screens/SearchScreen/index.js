
import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackIcon, SearchIcon, AudioIcon, DownIcon, StarIcon, HeartIcon, ExpandIcon, HeartWithoutFillIcon, MessageIcon, HobbitBanner } from '../../assets'
import { Colors } from '../../utils/Colors';
import InputField from '../../components/InputField'
import styles from './styles';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('window');

export default SearchScreen = ({ navigation }) => {

    const [showBottomView, setShowBottomView] = useState(false)

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
                contentContainerStyle={{ flexGrow: 1 , paddingBottom:30}}
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
                            setShowBottomView(!showBottomView);
                            scrollViewRef?.current.scrollToEnd({ animated: true });
                        }}
                        style={{ alignSelf: "center", position: "absolute", bottom: 50 }}>
                        <Image source={DownIcon} style={styles.downIconStyle} />
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ backgroundColor: Colors.appBlack  , paddingTop: 100}}>
                    <View>
                        <Image source={HobbitBanner} style={styles.hobbitBannerImage} />
                        <View style={{ backgroundColor: Colors.white }}>
                            <View style={styles.recomendedTextRow}>
                                <Text style={styles.recomendedText}>{`Recommended for you`}</Text>
                                <Image source={StarIcon} style={styles.starIcon} />
                            </View>
                            <Text style={{color: Colors.appBlack , fontSize: 15 , paddingHorizontal: 20}}>{`A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.`}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )

}
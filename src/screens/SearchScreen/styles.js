import { StyleSheet, StatusBar, Platform } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import { Colors } from '../../utils/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBlack
    },
    headerContainer: {
        flexDirection: "row",
        height: Platform.OS == 'ios' ? responsiveHeight(8.7) + 30 : responsiveHeight(8.7),
        paddingTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: responsiveWidth(3),

    },
    changeImageView: {
        backgroundColor: Colors.blueLight,
        padding: 8,
        borderRadius: 5,
        marginTop: 10
    },
    changeImageText: {
        fontSize: 15,
        color: Colors.blue
    },
    leftView: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    backIconStyle: {
        width: responsiveWidth(5),
        height: responsiveHeight(5),
        resizeMode: "contain"
    },
    titleStyle: {
        fontSize: 17,
        color: Colors.appText,
        fontWeight: "bold"
    },
    rightTextStyle: {
        fontSize: 17,
        color: Colors.appText,
    },
    movieDescriptionView: {
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingBottom: 20
    },
    movieDescriptionText: {
        color: Colors.appBlack,
        fontSize: 15,
        paddingHorizontal: 20,
        lineHeight: 25
    },
    breakingNewsText: {
        fontSize: 13,
        color: Colors.appGray,
        marginVertical: 10,
    },
    searchWatchingText: {
        color: Colors.appText,
        textAlign: "center",
        fontSize: 20,
        marginTop: responsiveHeight(20)
    },
    breakingImageStyle: {
        resizeMode: 'contain',
        width: 100,
        height: 100
    },
    breakingIconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 10
    },
    listenWatchingText: {
        color: Colors.appText,
        textAlign: "center",
        fontSize: 20,
    },
    rowViewInput: {
        flexDirection: 'row',
        margin: 30
    },
    profileTitleStyle: {
        fontSize: 15,
        color: Colors.appBlack,
        marginTop: 5
    },
    rightView: {
        // width: responsiveWidth(10),
        // height: responsiveHeight(5),
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: "center"
    },
    profileView: {
        width: responsiveWidth(94),
        alignSelf: "center",
        height: responsiveHeight(40),
        backgroundColor: Colors.appText,
        borderRadius: 10,
        padding: 10
    },
    profileImageView: {
        flexDirection: "row"
    },
    imageView: {

    },
    profileImageStyle: {
        width: 75,
        height: 75,
        resizeMode: 'contain'
    },
    settingIconStyle: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },
    commentsSection: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 20
    },
    commentsCountText: {
        fontSize: 20,
        color: Colors.appBlack,
        textAlign: "center"
    },
    commentsTextStyle: {
        fontSize: 13,
        color: Colors.appGray,
        textAlign: "center"
    },
    settingIconView: {
        width: '15%', alignItems: "flex-end"
    },
    interustType: {
        fontSize: 15,
        color: Colors.appBlack,
        marginVertical: 10
    },
    interestHeading: {
        fontSize: 15,
        color: Colors.appGray
    },
    interestListView: {
        padding: 5,
        backgroundColor: Colors.lightGray,
        marginRight: 5,
        borderRadius: 5,
        flexDirection: "row",
        top: 5,
        marginLeft: 5
    },
    interestsView: {
        borderWidth: 1,
        borderColor: Colors.appGray,
        height: 50,
        marginVertical: 10,
        borderRadius: 5
    },
    saveButtonStyle: {
        backgroundColor: Colors.appBlue,
        width: 40,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 10
    },
    audioButtonStyle: {
        backgroundColor: Colors.appBlue,
        width: 64,
        height: 64,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 10,
        alignSelf: 'center',
        marginTop: 30
    },
    downIconStyle: {
        width: 60,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    recomendedTextRow: {
        flexDirection: "row",
        marginLeft: 20,
        marginVertical: 20,
    },
    starIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginLeft: 10
    },
    recomendedText: {
        color: Colors.appGray,
        fontSize: 15
    },
    hobbitBannerImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover'
    },
    saveText: {
        fontSize: 15,
        color: Colors.appText,
        textAlign: "center"
    },
    inputStyle: {
        height: 40,
        backgroundColor: Colors.white,
        flex: 1,
        borderRadius: 10,
        paddingLeft: 10
    },
    absoluteView: {
        position: "absolute",
        zIndex: 1,
        top: -10,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        left: 10
    },
    interestListStyle: {
        flexDirection: "row",
        marginTop: 5,
    },
    popularCommentsText: {
        color: Colors.appGray,
        fontSize: 13
    },
    heartIconStyle: {
        width: 12,
        height: 12,
        resizeMode: "contain",
        marginLeft: 10
    },
    popularCommentsView: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center"
    },
    commentsContainer: {
        backgroundColor: Colors.white,
        padding: 8,
        borderRadius: 4,
        height: 91,
        marginVertical: 10
    },
    profileTitleBlueStyle: {
        fontSize: 13,
        color: Colors.blue,
    },
    expandIconStyle: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },
    rowView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    HeartWithoutFillIcon: {
        width: 12,
        height: 12,
        resizeMode: "contain",
        alignSelf: "center",
        marginRight: 5
    },
});

export default styles;

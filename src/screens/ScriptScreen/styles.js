import { StyleSheet, StatusBar } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

import { Colors } from '../../utils/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkBlack,
    },
    headerContainer: {
        flexDirection: "row",
        height: responsiveHeight(8.7),
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: responsiveWidth(3)
    },
    scriptListView: {
        backgroundColor: Colors.white,
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 10
    },
    profileInnerOptions: {
        flexDirection: 'row',
        width: '80%',
        alignSelf: "center",
        height: 40,
        justifyContent: 'center',
        alignItems: "center"
    },
    breakingIconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 10
    },
    breakingImageStyle: {
        resizeMode: 'contain',
        width: 100,
        height: 100
    },
    newsImage: {
        height: 170,
        width: '100%',
        resizeMode: "contain"
    },
    twitterTitle: {
        fontSize: 13,
        color: Colors.appBlack,
        fontWeight: 'bold',
    },
    birthDayTitle: {
        fontSize: 15,
        color: Colors.appBlack,
        marginVertical: 5
    },
    scrollViewStyle: {
        flexGrow: 1,
        marginHorizontal: 10,
        marginTop: 20
    },
    instaPhot: {
        width: '100%',
        height: 300,
        resizeMode: "contain"
    },
    twitterIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    twitterId: {
        fontSize: 13,
        color: Colors.appGray,
        fontWeight: 'bold',
        marginLeft: 10
    },
    twitterThumb: {
        width: 30,
        height: 30,
        resizeMode: "contain",
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
        marginLeft: responsiveWidth(3)
    },
    profileTitleStyle: {
        fontSize: 15,
        color: Colors.appBlack,
        marginTop: 5
    },
    rightView: {
        width: responsiveWidth(10),
        height: responsiveHeight(5),
        backgroundColor: Colors.appBlue,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: "center"
    },
    profileView: {
        width: responsiveWidth(94),
        alignSelf: "center",
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
        width: 60,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },
    saveText: {
        fontSize: 15,
        color: Colors.appText,
        textAlign: "center"
    },
    inputStyle: {
        height: 40,
        borderWidth: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 5
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

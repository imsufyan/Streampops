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
        backgroundColor: Colors.appBlack,
    },
    headerContainer: {
        flexDirection: "row",
        height: responsiveHeight(8.7),
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: responsiveWidth(3)
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
        // height: responsiveHeight(25),
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
        fontWeight: 'bold',
        fontSize: 15,
        color: Colors.appBlack
    },
    interestListView: {
        padding: 5,
        backgroundColor: Colors.lightGray,
        marginRight: 5,
        borderRadius: 5
    },
    interestListStyle: {
        flexDirection: "row",
        marginTop: 5
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

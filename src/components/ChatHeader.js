import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Colors } from '../utils/Colors';
import _ from "lodash";
import DropDownPicker from 'react-native-dropdown-picker';

const ChatHeader = (props) => {
    const [listOfMovies, setListMovies] = [[{ title: "Harry Potter and the philospher" }, { title: "Harry Potter and the philospher" }]]
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);
    return (
        <View style={[{ height: 60, width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 17, backgroundColor: Colors.appBlack,alignItems:"center" }, props.containerStyle]}>
            {
                !_.isNil(props.singleLeftIcon) &&
                <TouchableOpacity style={[{ justifyContent: "center", alignItems: "flex-start", height: "100%", paddingRight: 20 }, props.leftViewStyle]}
                    onPress={props.backIconPress}>
                    <Image style={[{ height: 22, width: 22, resizeMode: "contain", tintColor: Colors.white }, props.leftBackIconStyle]} source={props.singleLeftIcon} />
                </TouchableOpacity>
            }
            {
                listOfMovies !== null &&
                <DropDownPicker
                    listMode="MODAL"
                    schema={{
                        label: 'title',
                        value: 'title'
                    }}
                    dropDownStyle={{backgroundColor: 'red'}}
                    containerStyle={{ width: "75%" }}
                    style={{ height: 30, width: "100%", borderColor: Colors.appGray, borderWidth: 1, alignItems: "center" }}
                    textStyle={{ fontSize: 16 }}
                    placeholderStyle={{ color: Colors.appGray }}
                    open={open}
                    value={value}
                    items={listOfMovies}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    mode={"BADGE"}
                />
            }
            {
                !_.isNil(props.rightIcon) &&
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "flex-start", height: "100%",paddingLeft: 20  }}
                    onPress={props.rightIconPress} >
                    <Image style={[{ height: 22, width: 22, resizeMode: "contain", tintColor: Colors.white }, props.rightIconStyle]} source={props.rightIcon} />
                </TouchableOpacity>
            }
        </View>
    )
}
export default ChatHeader;
const styles = StyleSheet.create({
    backTextStyle: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 27
    },
    shahjeeTextStyle: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: "900",
    },
    incTextStyle: {
        color: Colors.appBlack,
        fontSize: 20,
        fontWeight: "900",
    }
})
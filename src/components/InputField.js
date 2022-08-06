// import React, { useState } from "react";
// import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
// import _ from "lodash";
// 
// import { colors } from "../themes/colors";
// const InputField = (props) => {
//     const [hidePass, setHidePass] = useState(true);
//     const [isFocused, setIsFocused] = useState(false)
//     const handleInputFocus = () => setIsFocused(true)

//     const handleInputBlur = () => setIsFocused(false)
//     return (
//         <View style={[props.containerStyle, { borderColor: isFocused ? colors.primaryColor : colors.greyColor }]}>
//             {!_.isNil(props.image) &&
//                 <View style={props.imageViewStyle}>
//                     <Image style={props.imageStyle} source={props.image} />
//                 </View>
//             }
//             {!_.isNil(props.countryCode) &&
//                 <View style={props.textViewStyle}>
//                     <Text style={props.countryCodeStyle}>{props.countryCode}</Text>
//                 </View>
//             }
//             {!_.isNil(props.sterick) &&
//                 <View style={props.sterickTextViewStyle}>
//                     <Text style={props.sterickTextStyle}>{props.sterick}</Text>
//                 </View>
//             }
//             <TextInput
//                 placeholder={props.placeholder}
//                 placeholderTextColor={props.placeholderTextColor}
//                 style={props.inputStyle}
//                 onChangeText={props.onChangeText}
//                 value={props.value}
//                 keyboardType={props.keyboardType}
//                 secureTextEntry={props.secureTextEntry ? hidePass ? true : false : false}
//                 editable={props.editable}
//                 maxLength={props.maxLength}
//                 autoComplete={props.autoComplete}
//                 onEndEditing={props.onEndEditing}
//                 onFocus={() => handleInputFocus()}
//                 onBlur={() => handleInputBlur()}
//             />
//             {!_.isNil(props.secureTextEntry) &&
//                 <TouchableOpacity style={{ height: "100%", width: "15%", alignItems: "flex-end", justifyContent: "center" }}
//                     onPress={() => { setHidePass(!hidePass) }}>
//                     <Image style={{ height: 8, width: 14, resizeMode: "cover"}} source={hidePass ? images.hidePasswordIcon : images.unhidePasswordIcon} />
//                 </TouchableOpacity>
//             }
//         </View>
//     )
// }
// export default InputField;
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { images } from "../assets/images/index";
import { colors } from "../themes/colors";
import _ from 'lodash';
import AppFonts from '../assets/fonts';

const InputField = (props) => {
    const [hidePass, setHidePass] = useState(true);
    const [isFocused, setIsFocused] = useState(false)
    const [movePlaceholder, setMovePlaceholder] = useState(false)
    const handleInputFocus = () => {
        setMovePlaceholder(true)
        setIsFocused(true)
    }

    const handleInputBlur = () => {
        setMovePlaceholder(false)
        setIsFocused(false)
    }

    return (
        <View style={[props.containerStyle, { borderColor: isFocused ? colors.primaryColor : colors.greyColor }]}>
            {movePlaceholder || props.value?.length > 0 ?
                <View style={[{ marginLeft: 15, backgroundColor: colors.whiteColor, position: "absolute", top: -11, zIndex: 1, paddingHorizontal: 10 }, props.errorViewStyle]}>
                    <Text style={{ fontSize: 12, lineHeight: 18, fontWeight: "500", fontFamily: AppFonts.Regular, color: colors.placeholderColor }}>{props.placeholder}</Text>
                </View>
                : <View></View>
            }
            <TextInput
                placeholder={movePlaceholder === true ? "" : props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                style={props.inputStyle}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry ? hidePass ? true : false : false}
                value={props.value}
                keyboardType={props.keyboardType}
                editable={props.editable}
                maxLength={props.maxLength}
                minLength={props.minLength}
                autoComplete={'off'}
                onEndEditing={props.onEndEditing}
                onFocus={() => handleInputFocus()}
                onBlur={() => handleInputBlur()}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
            />

            {!_.isNil(props.secureTextEntry) &&
                <TouchableOpacity style={{ height: "100%", width: "15%", alignItems: "flex-end", justifyContent: "center" }}
                    onPress={() => { setHidePass(!hidePass) }}>
                    <Image style={{ height: 10, width: 14, resizeMode: "cover" }} source={hidePass ? images.hidePasswordIcon : images.unhidePasswordIcon} />
                </TouchableOpacity>
            }
        </View>
    );
};
export default InputField;
const style = StyleSheet.create({

    inputStyle: {
        flexDirection: "row",
        height: 42,
        width: "100%",
        paddingLeft: 6,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.inputFieldBorderColor,
    },
    textInputStyle: {
        width: "90%",
        marginStart: 5,
        fontSize: 16
    },
});
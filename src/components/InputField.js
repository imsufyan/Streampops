
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/Colors';
import _ from 'lodash';

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
        <View style={[props.containerStyle, { borderColor: isFocused ? Colors.blue : Colors.appGray }]}>
            {movePlaceholder || props.value?.length > 0 ?
                <View style={[{ marginLeft: 15, backgroundColor: Colors.white, position: "absolute", top: -11, zIndex: 1, paddingHorizontal: 10 }, props.errorViewStyle]}>
                    <Text style={{ fontSize: 12, lineHeight: 18, fontWeight: "500", color: Colors.appGray }}>{props.placeholder}</Text>
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

            {/* {!_.isNil(props.secureTextEntry) &&
                <TouchableOpacity style={{ height: "100%", width: "15%", alignItems: "flex-end", justifyContent: "center" }}
                    onPress={() => { setHidePass(!hidePass) }}>
                    <Image style={{ height: 10, width: 14, resizeMode: "cover" }} source={hidePass ? images.hidePasswordIcon : images.unhidePasswordIcon} />
                </TouchableOpacity>
            } */}
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
        borderColor: Colors.appGray,
    },
    textInputStyle: {
        width: "90%",
        marginStart: 5,
        fontSize: 16
    },
});
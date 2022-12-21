import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Input = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={props.value}
                    keyboardType={'number-pad'}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder ? props.placeholder : 'Please type input'}
                />
            </View>
            {!props.fill &&
                <View style={styles.checkbox}>
                    <BouncyCheckbox
                        size={35}
                        fillColor="red"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 1 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={props.onPressIcon}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    inputContainer: {
        alignItems: "baseline",
        borderWidth: 0.6,
        width: '70%',
        borderRadius: 9,
        padding: 5
    },
    checkbox: {
        marginLeft: 20,
        justifyContent: 'center',
    }
})
export default Input

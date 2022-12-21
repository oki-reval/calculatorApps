import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            {props.icon &&
                <View style={styles.iconContainer}>
                    <Text style={styles.iconText} >{props.icon}</Text>
                </View>
            }
            {props.text &&
                <Text>Button</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        borderWidth: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 5
    },
    iconText: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
export default Button

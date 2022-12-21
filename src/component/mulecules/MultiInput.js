import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from '../atom'

const MultiInput = (props) => {
    return (
        <View>
            <Input onChangeText={(val) => props.onChangeText(val, 0)} onPressIcon={(val) => props.onPressIcon(val, 0)} />
            <Input onChangeText={(val) => props.onChangeText(val, 1)} onPressIcon={(val) => props.onPressIcon(val, 1)} />
            <Input onChangeText={(val) => props.onChangeText(val, 2)} onPressIcon={(val) => props.onPressIcon(val, 2)} />
        </View>
    )
}

export default MultiInput

const styles = StyleSheet.create({})
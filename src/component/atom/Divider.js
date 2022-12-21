import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = (props) => {
    return (
        <View
            style={{ height: props.height ? props.height : 5, backgroundColor: '#6C1503', marginVertical: 10 }}
        >

        </View>
    )
}

export default Divider

const styles = StyleSheet.create({})
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from '../atom';
import { MultiInput, MultiButton } from '../mulecules';

const Calculator = (props) => {
    return (
        <View>
            <Text style={styles.title}>My Calculator</Text>
            <MultiInput
                onChangeText={(val, index) => props.onChangeText(val, index)}
                onPressIcon={(val, index) => props.onPressIcon(val, index)}
            />
            <MultiButton onPress={(val) => props.onResult(val)} />
            <Divider height={2} />
            <Text style={styles.result}>Hasil : {props.result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        margin: 20
    },
    result: {
        fontSize: 20,
        fontWeight: '400'
    }
})
export default Calculator

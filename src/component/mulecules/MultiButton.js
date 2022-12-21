import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../atom';

const MultiButton = (props) => {
    return (
        <View style={styles.container}>
            <Button icon={'+'} onPress={() => props.onPress('+')} />
            <Button icon={'-'} onPress={() => props.onPress('-')} />
            <Button icon={'/'} onPress={() => props.onPress('/')} />
            <Button icon={'x'} onPress={() => props.onPress('*')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        marginHorizontal: 10
    }
})
export default MultiButton

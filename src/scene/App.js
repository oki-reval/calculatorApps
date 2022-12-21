import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Calculator from '../component/organisms/Calculator'

const App = () => {

    const [value, setValue] = useState([
        { val: 0, status: false },
        { val: 0, status: false },
        { val: 0, status: false }
    ])

    const [result, setResult] = useState(null)

    const handleInput = async (input, indexs) => {
        const dataUpdating = value.map((item, index) => {
            if (index === indexs) {
                return { ...item, val: input }
            }
            return item
        })
        setValue(dataUpdating)
    }

    const handlePressIcon = async (status, indexs) => {
        const dataUpdating = value.map((item, index) => {
            if (index === indexs) {
                return { ...item, status: status }
            }
            return item
        })
        setValue(dataUpdating)
    }

    const handleResult = async (operator) => {
        let totalCounting = 0
        let countingsData = []
        await value.map((item) => {
            if (item.status == true) {
                totalCounting = totalCounting + 1
                countingsData.push(parseInt(item.val))
            }
        })
        if (totalCounting > 1) {
            let total = null
            countingsData.map((val, index) => {
                if (index === 0) {
                    total = val
                } else {
                    total = operator == '+' ? total + val : operator == '-' ? total - val : operator == '/' ? total / val : total * val
                }
            })
            setResult(total)
        } else {
            alert('Tolong tambahkan inputan yang akan dihitung')
        }

    }

    return (
        <View style={styles.container}>
            <Calculator
                onChangeText={(input, index) => handleInput(input, index)}
                onPressIcon={(status, index) => handlePressIcon(status, index)}
                onResult={(val) => handleResult(val)}
                result={result}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
})

export default App

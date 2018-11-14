import React from 'react'
import {View, Text} from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

export default CardSection

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative'
    }
}
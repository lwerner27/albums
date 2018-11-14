// Import Libraires
import React from 'react'
import { Text, View } from 'react-native'

// Make Component
const Header = (props) => {
    const {textStyles, viewStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyles}>{props.headerText}</Text>
        </View>
    )
}

// Styling
const styles = {
    textStyles: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        padding: 15,
        elevation: 10,
        position: 'relative',
    }

}

// Make the componenet available to other parts of the application
export default Header
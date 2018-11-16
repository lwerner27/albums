import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card.js'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
    console.log('hello world')
    const {title, artist, thumbnail_image, image, url} = album
    const {
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle,
    } = styles

    return (
        <Card>

            {/* Header Content Section */}
            <CardSection >
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>

                </View>
            </CardSection>
            
            {/* Album Image Section */}
            <CardSection>
                <Image source={{uri: image}} style={imageStyle}/>
            </CardSection>

            {/* Purchase Button */}
            <CardSection>
                <Button onPress={() => {Linking.openURL(url)}}>
                    Click To Purchase
                </Button>
            </CardSection>

        </Card>
    )
}

styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    headerTextStyle: {
        fontSize: 18,
    },

    thumbnailStyle: {
        height: 50, 
        width: 50,
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumDetail
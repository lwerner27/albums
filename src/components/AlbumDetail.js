import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card.js'
import CardSection from './CardSection'

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image} = album
    const {thumbnailStyle, headerContentStyle} = styles

    return (
        <Card>
            <CardSection >
                <View>
                    <Image 
                        style={thumbnailStyle} 
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text>Album: {title}</Text>
                    <Text>Artist: {artist}</Text>

                </View>
            </CardSection>
        </Card>
    )
}

styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
    },

    thumbnailStyle: {
        height: 50, 
        width: 50,
    },

    thumbnailContainerStyle: {
        
    }
}

export default AlbumDetail
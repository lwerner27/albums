// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'
import Header from './src/components/header.js'
import AlbumList from './src/components/AlbumList.js'

// Create a component
const App = () => {
    return (
        <View>
            <Header headerText="Albums" />
            <AlbumList />
        </View>
    )
}

// Render it to the device
AppRegistry.registerComponent("albums", () => App)
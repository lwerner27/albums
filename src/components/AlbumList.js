import React, {Component} from 'react'
import {View, Text} from "react-native"
import AlbumDetail from './AlbumDetail'
import axios from 'axios'

class AlbumList extends Component {

    state = {
        albums: []
    }

    componentDidMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then(res => {
            this.setState({ albums: res.data })
        })
    }

    renderAlbums() {
        return this.state.albums.map((album => {
            return <AlbumDetail key={album.title} album={album}/>
        }))
    }

    render () {
        return (
            <View>
               {this.renderAlbums()} 
            </View>
        )

    }

}

export default AlbumList
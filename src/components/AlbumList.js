import React, {Component} from 'react'
import {ScrollView} from "react-native"
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
            <ScrollView>
               {this.renderAlbums()} 
            </ScrollView>
        )

    }

}

export default AlbumList
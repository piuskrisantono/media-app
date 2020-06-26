import React from 'react'
import MediaButton from './MediaButton'
import SearchBar from './SearchBar'

import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

import ImageList from './ImageList'
import unsplash from '../apis/unsplash'


const KEY = 'AIzaSyCyXkSWYWoSOK_ZFd1BTPkUn94YlNFeEQg'

class App extends React.Component {

    state = { media: 'video', videos: [], selectedVideo: null, images: [] }

    componentDidMount() {
        this.onTermSubmit('React Tutorial')
    }

    onMediaChange = (media) => {
        this.setState({ media })
    }

    getVideos = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResult: 5,
                key: KEY,
                type: 'video'
            }
        })

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    getPhotos = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
        })

        this.setState({
            images: response.data.results
        })
    }

    onTermSubmit = (term) => {
        this.getVideos(term)
        this.getPhotos(term)
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    renderContent = () => {
        if (this.state.media === 'video') {
            return (
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <ImageList images={this.state.images} />
            )
        }
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <MediaButton onMediaChange={this.onMediaChange} />
                    <SearchBar media={this.state.media} onFormSubmit={this.onTermSubmit} />
                </div>
                {this.renderContent()}
            </div>
        )
    }
}

export default App
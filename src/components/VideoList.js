import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />
    })

    if (videos.length === 0) {
        return (
            <div className="ui segment">
                Loading
            </div>
        )
    }
    return (
        <div className="ui segment">
            <div className="ui relaxed divided list">
                {renderList}
            </div>
        </div>
    )
}

export default VideoList
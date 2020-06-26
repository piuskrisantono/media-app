import React from 'react'

class MediaButton extends React.Component {
    state = { media: 'video' }

    onSelectChange(e) {
        this.setState({ media: e.target.value })
        this.props.onMediaChange(e.target.value)
    }

    render() {
        return (
            <h4 className="ui header">
                <div className="content">
                    I'm looking for {' '}
                    <select onChange={e => this.onSelectChange(e)} className="ui inline dropdown" name="media" value={this.state.media}>
                        <option value="video">videos</option>
                        <option value="photo">photos</option>
                    </select>
                </div>
            </h4>
        )
    }
}

export default MediaButton
import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui search-bar">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <input
                            value={this.state.term}
                            onChange={this.onInputChange}
                            required
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
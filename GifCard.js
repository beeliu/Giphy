import React, {Component} from 'react'
import PropTypes from 'prop-types'

class GifCard extends Component
{
    state = {
        url : ""
    }
    render()
    {
        return(
                <div>{this.props.url}</div>
        );
    }
}

GifCard.propTypes = {
    url: PropTypes.string
}

export default GifCard;
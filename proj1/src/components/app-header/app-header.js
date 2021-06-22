import React from 'react'
import PropTypes from 'prop-types'

import './app-header.css'

const AppHeader = ({ allPosts, liked }) => {
    return (
        <div className='app-header d-flex'>
            <h1>Anton Shimanovich</h1>
            <h2>{allPosts} записей, из ним понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader

AppHeader.propTypes = {
    allPosts: PropTypes.number,
    liked: PropTypes.number
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            { name: 'all', label: 'Все' },
            { name: 'like', label: 'Понравилось' }
        ]
    }

    render() {
        const { filter, onFilterSelect } = this.props
        const buttons = this.buttons.map(({ name, label }) => {
            const active = filter === name
            const btnClass = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    type='button'
                    className={`btn ${btnClass}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}</button>
            )
        })

        return (
            <div className='btn-group' >
                {buttons}
            </div>
        )
    }
}

PostStatusFilter.propTypes = {
    filter: PropTypes.string,
    onFilterSelect: PropTypes.func
}
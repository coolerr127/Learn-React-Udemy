import React, { Component } from 'react'
import gotService from '../../services/gotService'
import ItemDetails, { Field } from '../itemDetails'
import PropTypes from 'prop-types'

export default class BooksItem extends Component {
	gotService = new gotService()

	render() {
		return (
			<ItemDetails
				itemId={this.props.bookId}
				getData={this.gotService.getBook}
			>
				<Field field='numberOfPages' label='Number of pages' />
				<Field field='publisher' label='Publisher' />
				<Field field='released' label='Released' />
			</ItemDetails>
		)
	}
}

BooksItem.propTypes = {
	bookId: PropTypes.string,
}

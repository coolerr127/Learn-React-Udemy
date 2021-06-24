import React, { Component } from 'react'
import './itemList.css'
import GotService from '../../services/gotService'
import Spinner from '../spinner'
import PropTypes from 'prop-types'
import ErrorMessage from '../errorMessage'

export default class ItemList extends Component {
	gotService = new GotService()

	state = {
		charList: null,
		error: false,
	}

	componentDidMount() {
		this.gotService
			.getAllCharacters()
			.then(charList => {
				this.setState({
					charList,
					error: false,
				})
			})
			.catch(() => {
				this.onError()
			})
	}

	componentDidCatch() {
		this.setState({
			charList: null,
			error: true,
		})
	}

	onError() {
		this.setState({
			charList: null,
			error: true,
		})
	}

	renderItems(arr) {
		return arr.map(item => {
			const { id, name } = item
			return (
				<li
					key={id}
					className='list-group-item'
					onClick={() => this.props.onCharSelected(id)}
				>
					{name}
				</li>
			)
		})
	}

	render() {
		const { charList, error } = this.state

		if (error) {
			return <ErrorMessage />
		}

		if (!charList) {
			return <Spinner />
		}

		const items = this.renderItems(charList)

		return <ul className='item-list list-group'>{items}</ul>
	}
}

ItemList.propTypes = {
	onCharSelected: PropTypes.func,
}

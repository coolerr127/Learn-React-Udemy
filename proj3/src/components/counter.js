import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<div className='jumbotron'>
			<h1>{counter}</h1>
			<button onClick={dec} className='btn btn-primary'>
				DEC
			</button>
			<button onClick={inc} className='btn btn-primary'>
				INC
			</button>
			<button onClick={rnd} className='btn btn-primary'>
				RND
			</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		counter: state.count
	}
}

const mapDispatchToProps = dispatch => {
	const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

	return {
		inc,
		dec,
		rnd
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

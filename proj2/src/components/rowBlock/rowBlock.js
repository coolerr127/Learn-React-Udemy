import React from 'react'
import { Col, Row } from 'reactstrap'
import PropTypes from 'prop-types'

const RowBlock = ({ left, right }) => {
	return (
		<Row>
			<Col md='6'>{left}</Col>
			<Col md='6'>{right}</Col>
		</Row>
	)
}

export default RowBlock

RowBlock.propTypes = {
	left: PropTypes.object,
	right: PropTypes.object
}
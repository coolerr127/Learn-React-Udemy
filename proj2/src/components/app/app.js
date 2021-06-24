import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import Header from '../header'
import RandomChar from '../randomChar'
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage'
import './app.css'

export default class App extends Component {
	state = {
		showRandomCharacter: true,
		error: false,
	}

	componentDidCatch() {
		this.setState({ error: true })
	}

	toggleRandomCharacter = () => {
		this.setState({
			showRandomCharacter: !this.state.showRandomCharacter,
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		}

		const character = this.state.showRandomCharacter ? <RandomChar /> : null

		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>
							{character}
							<button
								className='toggle-btn'
								onClick={this.toggleRandomCharacter}
							>
								ToggleRandomCharacter
							</button>
						</Col>
					</Row>
					<CharacterPage />
				</Container>
			</>
		)
	}
}

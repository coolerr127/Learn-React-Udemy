import React from 'react'
import './header.css'

const Header = () => {
	return (
		<ul className='header-block'>
			<h3 className='header-title'>
				<a href='#'>Game of Thrones DB</a>
			</h3>
			<ul className='header-links'>
				<li>
					<a href='#'>Characters</a>
				</li>
				<li>
					<a href='#'>Houses</a>
				</li>
				<li>
					<a href='#'>Books</a>
				</li>
			</ul>
		</ul>
	)
}

export default Header

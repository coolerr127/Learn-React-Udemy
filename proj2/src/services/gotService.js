export default class GotService {
	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api'
	}

	async getResurce(url) {
		const res = await fetch(`${this._apiBase}${url}`)

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}

		return await res.json()
	}

	async getAllCharacters() {
		const characters = await this.getResurce('/characters?page=3$pageSize=10')
		return characters.map(this._transformCharacter)
	}

	async getCharacter(id) {
		const character = await this.getResurce(`/characters/${id}`)
		return this._transformCharacter(character)
	}

	getAllBooks() {
		return this.getResurce('/books?page=3$pageSize=10')
	}

	getBook(id) {
		return this.getResurce(`/books/${id}`)
	}

	getAllHouses() {
		return this.getResurce('/houses?page=3$pageSize=10')
	}

	getHouse(id) {
		return this.getResurce(`/houses/${id}`)
	}

	_transformCharacter(character) {
		return {
			name: character.name,
			gender: character.gender,
			born: character.born,
			died: character.died,
			culture: character.culture
		}
	}

	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestalWeapons: house.ancestalWeapons
		}
	}

	_transformBook(book) {
		return {
			name: book.name,
			numberOfPage: book.numberOfPage,
			publiser: book.publiser,
			released: book.released
		}
	}
}

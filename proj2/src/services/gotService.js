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
		const characters = await this.getResurce(
			'/characters?page=5&pageSize=10'
		)
		return characters.map(this._transformCharacter)
	}

	async getCharacter(id) {
		const character = await this.getResurce(`/characters/${id}`)
		return this._transformCharacter(character)
	}

	async getAllBooks() {
		const books = await this.getResurce('/books?page=3&pageSize=10')
		return books.map(this._transformBook)
	}

	async getBook(id) {
		const book = await this.getResurce(`/books/${id}`)
		return this._transformBook(book)
	}

	async getAllHouses() {
		const houses = await this.getResurce('/houses?page=3&pageSize=10')
		return houses.map(this._transformHouse)
	}

	async getHouse(id) {
		const house = await this.getResurce(`/houses/${id}`)
		return this._transformHouse(house)
	}

	isSet(data) {
		if (data) {
			return data
		} else {
			return 'no data'
		}
	}

	_extractId = item => {
		const idRegExp = /\/([0-9]*)$/
		return item.url.match(idRegExp)[1]
	}

	_transformCharacter = character => {
		return {
			id: this._extractId(character),
			name: this.isSet(character.name),
			gender: this.isSet(character.gender),
			born: this.isSet(character.born),
			died: this.isSet(character.died),
			culture: this.isSet(character.culture),
		}
	}

	_transformHouse(house) {
		return {
			id: this._extractId(house),
			name: this.isSet(house.name),
			region: this.isSet(house.region),
			words: this.isSet(house.words),
			titles: this.isSet(house.titles),
			overlord: this.isSet(house.overlord),
			ancestalWeapons: this.isSet(house.ancestalWeapons),
		}
	}

	_transformBook(book) {
		return {
			id: this._extractId(book),
			name: this.isSet(book.name),
			numberOfPage: this.isSet(book.numberOfPage),
			publiser: this.isSet(book.publiser),
			released: this.isSet(book.released),
		}
	}
}

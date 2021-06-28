const reducer = (state = {count: 0}, action) => {
	switch (action.type) {
	case 'INC':
		state = {count: state.count + 1}
		return state
	case 'DEC':
		state = {count: state.count - 1}
		return state
	case 'RND':
		state = {count: state.count + action.value}
		return state
	default:
		return state
	}
}

export default reducer

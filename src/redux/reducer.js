import { ActionTypes } from './types';

const INITIAL_STATE = {
	books: [],
	showBookList: false,
	isFetching: false,
	errorMessage: undefined,
	myBooks: []
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_BOOKS_START:
			return {
				...state,
				isFetching: true
			};
		case ActionTypes.FETCH_BOOKS_SUCCESS:
			return {
				...state,
				isFetching: false,
				books: [ ...action.payload ]
			};
		case ActionTypes.FETCH_BOOKS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		case ActionTypes.TOGGLE_BOOKLIST:
			return {
				...state,
				showBookList: !state.showBookList
			};
		case ActionTypes.ADD_BOOK:
			return {
				...state,
				myBooks: [ ...state.myBooks, action.payload ]
			};
		default:
			return {
				...state
			};
	}
};

export default reducer;

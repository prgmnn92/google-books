import { ActionTypes } from './types';

import { searchBooks } from '../books-api';

export const toggleBookList = () => ({
	type: ActionTypes.TOGGLE_BOOKLIST
});

export const addBook = (book) => ({
	type: ActionTypes.ADD_BOOK,
	payload: book
});

export const fetchBooksStart = () => ({
	type: ActionTypes.FETCH_BOOKS_START
});

export const fetchBooksSuccess = (items) => ({
	type: ActionTypes.FETCH_BOOKS_SUCCESS,
	payload: items
});

export const fetchBooksFailure = (errorMessage) => ({
	type: ActionTypes.FETCH_BOOKS_FAILURE,
	payload: errorMessage
});

export const fetchBooksStartAsync = (searchTerm) => {
	return (dispatch) => {
		console.log('TERM', searchTerm);
		const booksPromise = searchBooks(searchTerm);
		dispatch(fetchBooksStart());

		booksPromise
			.then((items) => {
				dispatch(fetchBooksSuccess(items));
			})
			.catch((error) => dispatch(fetchBooksFailure(error.message)));
	};
};

const baseURL = 'https://www.googleapis.com/books/v1';

export const searchBooks = (searchTerm) => {
	const url = baseURL + '/volumes?q=' + searchTerm + '&maxResults=40&key=' + process.env.REACT_APP_BOOK_API;

	const error = new Error();

	return fetch(url)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}

			error.message = 'Error searching for books.';

			throw error;
		})
		.then((res) => res.items);
};

export const fetchBook = (id) => {
	const url = baseURL + '/volumes/' + id;

	const error = new Error();

	return fetch(url)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}

			error.message = 'Error searching for book.';

			throw error;
		})
		.then((res) => res);
};

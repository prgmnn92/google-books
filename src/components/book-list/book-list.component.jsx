import React from 'react';

import { connect } from 'react-redux';

import { useHistory, Link } from 'react-router-dom';

import './book-list.styles.scss';

const bookList = ({ showBookList, myBooks }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const history = useHistory();

	// myBooks.map((book) => console.log(book));

	let bookList =
		myBooks.length > 0 ? (
			<React.Fragment>
				{myBooks.map((book) => (
					<div key={book.id} className="book">
						<Link to={'/book-details/' + book.id}>
							<img
								// onClick={() => {
								// 	history.push(`/book-details/${book.id}`);
								// 	window.location.reload();
								// }}
								src={book.volumeInfo.imageLinks.thumbnail}
								alt={book.volumeInfo.title}
							/>
						</Link>
					</div>
				))}
			</React.Fragment>
		) : null;

	return <div className={showBookList ? 'book-list book-list--active' : 'book-list'}>{bookList}</div>;
};

const mapStateToProps = (state) => ({
	showBookList: state.showBookList,
	myBooks: state.myBooks
});

export default connect(mapStateToProps)(bookList);

import React from 'react';
import { connect } from 'react-redux';

import { useHistory } from "react-router-dom";

import './search-results.styles.scss';

const searchResults = ({ books, showBookList }) => {

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const history = useHistory();


	return (
		<div className={showBookList ? 'search-results' : 'search-results--full search-results'}>
			{books.map((book) => {

				const rating = (book.volumeInfo.averageRating / 5) * 100;
				
				return (
					<div className="search-results__book" key={book.id}>
						<img src={book.volumeInfo.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} />
						<div onClick={() => history.push(`/book-details/${book.id}`)} className="overlay">
							<h1>{book.volumeInfo.title}</h1>
							<div className="authors">
							<h5>Written by:</h5>
							{book.volumeInfo.authors?.map(author => <h5>- {author}</h5>)}
							</div>
							<div className="rating">
							<h4>Average Rating:</h4>
							<div className="star-ratings">
								<div className="star-ratings-top" style={{width: rating + "%"}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
								<div className="star-ratings-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
							</div>
							</div>


						</div>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	books: state.books,
	showBookList: state.showBookList
});

export default connect(mapStateToProps)(searchResults);

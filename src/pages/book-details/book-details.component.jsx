import React from 'react';
import { connect } from "react-redux";

import { addBook } from "../../redux/actions";
import { fetchBook } from '../../books-api';
import './book-details.styles.scss';

class BookDetails extends React.Component {
	state = {
		book: {}
	};
	componentDidMount() {
		let book = fetchBook(this.props.match.params.id);

		book
			.then((details) => {
				console.log(details);
				this.setState({
					book: details
				});
			})
			.catch((error) => {
				console.log(error.message);
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.match.params.id !== this.props.match.params.id) {
			let book = fetchBook(this.props.match.params.id);

		book
			.then((details) => {
				console.log(details);
				this.setState({
					book: details
				});
			})
			.catch((error) => {
				console.log(error.message);
			});
		}

	}

	
	render() {
		const { book } = this.state;

		return (
			<React.Fragment>
				{book ? (
					<div className={this.props.showBookList ? "book-details" : "book-details book-details--full"}>
						<div className="details" >
						<h1>{book.volumeInfo?.title}</h1>
							<h3>{book.volumeInfo?.subtitle}</h3>
							<h4>Written by:</h4>
							{
								book.volumeInfo?.authors.map(author => <h5>- {author}</h5>)
							}
							<h4>Page count: {book.volumeInfo?.pageCount}</h4>
							<div className="button" onClick={() => this.props.addBook(this.state.book)}>Add to list</div>


						</div>
						<div className="image">
							<img src={book.volumeInfo?.imageLinks.thumbnail} alt={book.volumeInfo?.title} />
							<div className="button"><a href={book.volumeInfo?.previewLink}>Preview</a></div>

						</div>
					</div>
				) : null}
			</React.Fragment>
		);
	}
};

const mapStateToProps = state => ({
	showBookList: state.showBookList
})

const mapDispatchToProps = (dispatch) => ({
	addBook: (book) => dispatch(addBook(book))
})



export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);

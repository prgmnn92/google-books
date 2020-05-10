import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBooksStartAsync, toggleBookList } from '../../redux/actions';

import { ReactComponent as BurgerMenu } from '../../assets/ic_round-menu-open.svg';

import './search-input.styles.scss';

class searchInput extends React.Component {
	state = {
		searchTerm: ''
	};

	setSearchTerm = (event) => {
		this.setState({
			searchTerm: event.target.value
		});
	};

	render() {
		const { toggleBookList, fetchBooksStartAsync } = this.props;

		return (
			<div className="search-input">
				<form
					className="search-input__form"
					onSubmit={(event) => {
						this.props.history.push('/');
						fetchBooksStartAsync(this.state.searchTerm);
						event.preventDefault();
					}}
				>
					<button className="search-input__button" type="submit">
						Search
					</button>
					<input className="search-input__input" onChange={this.setSearchTerm} />
				</form>
				<BurgerMenu className="search-input__menu" onClick={() => toggleBookList()} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	showBookList: state.showBookList
});

const mapDispatchToProps = (dispatch) => ({
	fetchBooksStartAsync: (term) => dispatch(fetchBooksStartAsync(term)),
	toggleBookList: () => dispatch(toggleBookList())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(searchInput));

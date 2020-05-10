import React from 'react';

import SearchResults from '../../components/search-results/search-results.component';

import './search-page.styles.scss';

class SearchPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SearchResults />
			</React.Fragment>
		);
	}
}

export default SearchPage;

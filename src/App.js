import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SearchInput from './components/search-input/search-input.component';
import BookList from './components/book-list/book-list.component';
import BookDetails from './pages/book-details/book-details.component';
import SearchPage from './pages/search-page/search-page.component';

import './App.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<SearchInput />
				<BookList />
				<Switch>
					<Route exact path="/" component={SearchPage} />
					<Route path="/book-details/:id" component={BookDetails} />
				</Switch>
			</div>
		);
	}
}

export default App;

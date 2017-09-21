import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: 'bucket list'
		};
	}

	render(){
		return (
			<div className="search-bar">
				<label className="vidSearchLbl">
					Get Inspired:
				</label>
				<input 
					value = {this.state.term}
					onChange = { (event) => this.onInputChange(event.target.value) } />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
import React from 'react';

export default class SearchResult extends React.Component {
	render() {
		return (
			<div className="search-result"><span className="search-result-label">Search Result:</span><span className="search-result-count">{this.props.countResult}</span></div>
		);
	}
}

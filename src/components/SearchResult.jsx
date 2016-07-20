import React from 'react';

export default class SearchResult extends React.Component {
	render() {
		return (
			<div className="search-result"><span className="label">Search Result:</span><span className="count">{this.props.countResult}</span></div>
		);
	}
}

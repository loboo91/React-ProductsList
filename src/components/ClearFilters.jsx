import React from 'react';

export default class ClearFilters extends React.Component {
	render() {
		return (
			<div className="clear-all-filters">
				<p><span className="genericon genericon-close-alt icon-filters-reset"/> {this.props.label}</p>
			</div>
		);
	}
}

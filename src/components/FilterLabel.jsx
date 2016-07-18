import React from 'react';

export default class FilterLabel extends React.Component {
	render() {
		return (
			<div className="filter-header">
				<span className="filter-header-label">{this.props.label}</span>
				<span className="genericon genericon-close-alt icon-items-reset"/>
				<span className="filter-option">{this.props.sublabel}</span>
			</div>
		);
	}
}

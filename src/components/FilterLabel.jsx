import React from 'react';

export default class FilterLabel extends React.Component {
	render() {

		return (
			<div className="filter-header">
				<span className="label">{this.props.label}</span>
				<span className="genericon genericon-close-alt icon-items-reset"/>
				<span className="sublabel">{this.props.sublabel}</span>
			</div>
		);
	}
}

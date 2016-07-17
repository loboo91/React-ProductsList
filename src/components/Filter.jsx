import React from 'react';


export default class Filter extends React.Component {

	render()
	{
		return (
			<div className="filter-container">
				<div className="filter-header"><span className="filter-header-label">{this.props.label}</span><span className="genericon genericon-close-alt icon-items-reset"/></div>
					{ this.props.children }
			</div>
		);
	}
}

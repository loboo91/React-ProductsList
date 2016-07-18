import React from 'react';

export default class ProductsList extends React.Component {

	render()
	{
		return (
			<div className={ this.props.class }>
					{ this.props.children }
			</div>
		);
	}
}

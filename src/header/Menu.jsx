import React from 'react';

export default class Menu extends React.Component {
	render()
	{
		return (
			<nav className={ this.props.class }>
				<ul>
					{ this.props.children }
				</ul>
			</nav>
		);
	}
}

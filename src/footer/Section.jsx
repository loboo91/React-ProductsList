import React from 'react';

export default class Section extends React.Component {
	render() {
		return (
			<div className={"footer-category " + this.props.class}>
				<div className="footer-category-label">{this.props.label} </div>
				{this.props.children}
			</div> );
	}
}

import React from 'react';

export default class Filter extends React.Component {
	render() {
		var showMore = "";
		if (this.props.children.length > this.props.size ){
			showMore = <div className="show-more"><p>+ Show more <span>110</span></p></div>
		}
		return (
			<div className="filter-container">
				{ this.props.children }
				{showMore}
			</div>
		);
	}
}

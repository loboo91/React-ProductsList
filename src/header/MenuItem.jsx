import React from "react";

export default class MenuItem extends React.Component {
	render() {
		return (
			<li className={this.props.class}><a href={this.props.url}>{this.props.title}</a></li>
		);
	}
}

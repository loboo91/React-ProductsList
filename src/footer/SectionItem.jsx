import React from 'react';

export default class SectionItem extends React.Component {
	render() {
		return (<div className="footer-section-item"> {this.props.label} </div>);
	}
}

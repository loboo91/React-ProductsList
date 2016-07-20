import React from 'react';
import FilterLabel from './FilterLabel.jsx';
export default class FilterColors extends React.Component {
	render() {
		return (
			<div className="filter-color-container">
				<FilterLabel label="Colors" sublabel="Choose color(s)" />
				<div className="colors-container">
					{ this.props.children }
					<div className="add-color" />
				</div>
				<div className="logo-container">
					<p>or <br />
					<span>Use colors from your logo</span>
					</p>
					<button type="submit" value="upload logo" id="uploadLogo"> UPLOAD LOGO </button>
				</div>
			</div>
		);
	}
}

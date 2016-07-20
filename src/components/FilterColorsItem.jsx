import React from "react";

export default class FilterColorsItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: false
		};
	}

	handleSelectedChange() {
		this.setState({selected: !this.state.selected});
	}

	render() {
		var colorCss = {
			backgroundColor: this.props.colorValue
		};

		return (
			<div className="filter-color-item" onClick={this.handleSelectedChange.bind(this)}>
				<label htmlFor={this.props.colorValue}>
					<input
						name="color"
						type="radio"
						itemID={this.props.colorValue}
						value={this.props.colorValue}
						checked={this.state.selected}
						onChange={this.handleSelectedChange.bind(this)}
					/>
					<span className="square" style={colorCss}>
						<span className={this.props.addButton} />
					</span>
				</label>
			</div>
		);
	}
}



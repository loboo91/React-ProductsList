import React from "react";

export default class FilterOrientation extends React.Component {


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
		return (
			<div className="filter-option" onClick={this.handleSelectedChange.bind(this)}>
				<div className="filter-option-checkbox orientation">
					<input
						type="checkbox"
						checked={this.state.selected}
						ref="inFilterOptionInput"
						onChange={this.handleSelectedChange.bind(this)}
					/>
					<label className="filter-checkbox-label">
						{this.props.label}
					</label>
			  </div>
				<div className="filter-option-count">
					{this.props.count}
				</div>
			</div>
		);
	}
}

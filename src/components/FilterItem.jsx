import React from "react";

export default class FilterItem extends React.Component {


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

		var If = React.createClass({
			render: function() {
				if (this.props.test) {
					return this.props.children;
				}
				else {return false; }
			}
		});

		if (this.props.star){
			var stars = "";
			var style = "gold-star";
			for (var j=0; j<5; j++) {
				if (this.props.star <= j) style = "grey-star";
				stars += "<span class='genericon genericon-star "+style+"'></span>";
			}
			var toReturn = {
				__html: stars
			};
		}

		return (
			<div className="filter-option" onClick={this.handleSelectedChange.bind(this)}>

				<If test={this.props.star}>
					<div className="rating-item">
						<label htmlFor={this.props.star}>
							<input
								name={this.props.label}
								type="radio"
								itemID={this.props.star}
								value={this.props.star}
								checked={this.state.selected}
								onChange={this.handleSelectedChange.bind(this)}
							/>
							<span className="circ"><span className="dot"/></span>
							<span className="rating-label" dangerouslySetInnerHTML={toReturn} />
						</label>
					</div>
				</If>

				<If test={!this.props.star}>
					<div className={"option-checkbox " + this.props.itemClassName}>
						<input
							type="checkbox"
							checked={this.state.selected}
							onChange={this.handleSelectedChange.bind(this)}
						/>
						<label className="checkbox-label">
							{this.props.label}
						</label>
					</div>
				</If>

				<div className="option-count">
					{this.props.count}
				</div>

			</div>
		);
	}
}

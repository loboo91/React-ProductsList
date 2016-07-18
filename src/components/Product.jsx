import React from 'react';

export default class Product extends React.Component {
	render() {

		var stars = "";
		var style = "";

		for (var j=1; j<6; j++) {
			if (this.props.item.rating < j) style = "grey-star";
			stars += "<span class='genericon genericon-star "+style+"'></span>";
		}

		var toReturn = {
			__html: stars
		};

		return (
			<div className='product-container fade-in'>
				<div className='product-image-container'>
					<img src={this.props.item.srcImg} alt={"pic "+ this.props.item.srcImg}/>
				</div>
				<div className='product-description-container'>
					<p className='product-rating' dangerouslySetInnerHTML={toReturn}/>
					<p className={"product-"+this.props.item.fav}><span className='genericon genericon-heart'/></p>
					<p className='product-name'>{this.props.item.name}</p>
					<p className='product-size'>{this.props.item.size}</p>
				</div>
			</div>
		);
	}
}

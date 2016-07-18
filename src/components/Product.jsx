import React from 'react';

export default class ProductContainer extends React.Component {
	render() {
		return (
			<div class='product-container fade-in'>
				<div class='product-image-container'>
					<img src={this.props.produkt.srcImg} alt={"pic "+ this.props.produkt.srcImg}/>
				</div>
				<div class='product-description-container'>
					<p class='product-rating'>"+ stars +"</p>
					<p class='product-"+products[i].fav+"'><span class='genericon genericon-heart'/></p>
					<p class='product-name'>"+products[i].name+ "</p>
					<p class='product-size'>"+products[i].size+ "</p>
				</div>
			</div>
		);
	}
}

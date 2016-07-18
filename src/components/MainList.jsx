import React from 'react';
import Product from './Product.jsx'

export default class MainList extends React.Component {
	render() {
		return (
			<div className="products-list">
				{(()=>{
					let allProducts =[];
					for(var i=0; i<this.props.showMax;i++){
						allProducts.push(<Product key={i} item={this.props.productsData[i]} />)
					};
					return allProducts;
				})()}
			</div>
		);
	}
}

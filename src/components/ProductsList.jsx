import React from 'react';

export default class ProductsList extends React.Component {

	render()
	{
		var show_product = 20;
		var like = ['unlike','like'];
		var size = ['90x50mm','85x55mm'];
		var products = [];
		for (var i=0; i<100; i++) {
			products.push({
				rating: ""+ Math.floor((Math.random() * 5) + 1) +"",
				fav: ""+ like[Math.floor((Math.random() * 2))] +"",
				name: "Produkt " + i,
				size: ""+ size[Math.floor((Math.random() * 2))] +"",
				img: "./assets/images/prod/" + i%10 +".jpg"
			});
		}

		var output = "";
		var stars = "";
		var style = "";
		for (i=0; i<show_product; i++) {
			stars = "";
			style = "";
			for (var j=1; j<6; j++) {
				if (products[i].rating < j) style = "grey-star";
				stars += "<span class='genericon genericon-star "+style+"'></span>";
			}
			output += "<div class='product-container fade-in'>" +
									"<div class='product-image-container'>" +
										"<img src='"+products[i].img+"' alt='pic "+ products[i].name+" '/>" +
									"</div>" +
									"<div class='product-description-container'>" +
										"<p class='product-rating'>"+ stars +"</p>" +
										"<p class='product-"+products[i].fav+"'><span class='genericon genericon-heart'/></p>" +
										"<p class='product-name'>"+products[i].name+ "</p>" +
										"<p class='product-size'>"+products[i].size+ "</p>" +
									"</div>" +
								"</div>";
		}

		var toReturn = {
			__html: output
		}

		return (<div className="products-list" dangerouslySetInnerHTML={toReturn}></div>)
	}

}

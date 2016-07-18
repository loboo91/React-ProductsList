import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import ProductsList from './components/ProductsList.jsx'
import Filter from './components/Filter.jsx'
import FilterLabel from './components/FilterLabel.jsx'
import FilterItem from './components/FilterItem.jsx'
import FilterColors from './components/FilterColors.jsx'
import SearchResult from './components/SearchResult.jsx'
import SearchInfo from './components/SearchInfo.jsx'
import ProductsListOptions from './components/ProductsListOptions.jsx'
import ThumbnailSize from './components/ThumbnailSize.jsx'
import MainList from './components/MainList.jsx'
import ClearFilters from './components/ClearFilters.jsx'
import Pagination from './components/Pagination.jsx'

export class App extends React.Component {
	render() {
		var like = ['unlike', 'like'];
		var size = ['90x50mm', '85x55mm'];
		var products = [];
		for (var i = 0; i < 100; i++) {
			products.push({
				rating: "" + Math.floor((Math.random() * 5) + 1) + "",
				fav: "" + like[Math.floor((Math.random() * 2))] + "",
				name: "Produkt " + i,
				size: "" + size[Math.floor((Math.random() * 2))] + "",
				srcImg: "./assets/images/prod/" + i % 10 + ".jpg"
			});
		}

		return (
			<div className="page">
				<Header />
				<div className="columns-container">
					<ProductsList class="product-list-container">
						<div className="filters-container">
							<p className="main-list-header">Narrow Results</p>
							<Filter>
								<FilterLabel label="Orientation"/>
								<FilterItem label="Horizontal" itemClassName="orientation horizontal"/>
								<FilterItem label="Vertical" itemClassName="orientation vertical"/>
							</Filter>
							<Filter>
								<FilterLabel label="Size"/>
								<FilterItem label="90x50mm" count="112"/>
								<FilterItem label="85x55mm" count="67"/>
							</Filter>
							<Filter>
								<FilterLabel label="Customer rating" sublabel="At least"/>
								<FilterItem label="Rating" itemClassName="rating" star={4} count="67"/>
								<FilterItem label="Rating" itemClassName="rating" star={3} count="67"/>
								<FilterItem label="Rating" itemClassName="rating" star={2} count="67"/>
								<FilterItem label="Rating" itemClassName="rating" star={1} count="67"/>
							</Filter>
							<Filter>
								<FilterLabel label="Color" sublabel="Chose color(s)"/>
								<FilterColors label="purple" colorValue="#6a71e6"/>
								<FilterColors label="blue" colorValue="#0192ff"/>
								<FilterColors label="bluelight" colorValue="#61d2fe"/>
								<FilterColors label="green" colorValue="#48dc6c"/>
								<FilterColors label="red" colorValue="#fe4a65"/>
								<FilterColors label="orangedark" colorValue="#ff5534"/>
								<FilterColors label="orange" colorValue="#ffa500"/>
								<FilterColors label="yellow" colorValue="#fed201"/>
								<FilterColors label="gray" colorValue="#9fa0a4"/>
								<FilterColors label="add" add={true}/>
							</Filter>
							<Filter>
								<FilterLabel label="Style"/>
								<FilterItem label="All" count="208"/>
								<FilterItem label="Abstraction" count="112"/>
								<FilterItem label="Geometry" count="83"/>
								<FilterItem label="Men" count="230"/>
								<FilterItem label="Women" count="18"/>
								<FilterItem label="Children" count="66"/>
								<FilterItem label="Music" count="20"/>
								<FilterItem label="Vintage" count="66"/>
								<FilterItem label="Flower" count="20"/>
							</Filter>

						</div>
						<div className="products-list-container">
							<div className="products-list-header">
								<SearchResult countResult="34"/>
								<ProductsListOptions/>
								<ThumbnailSize />
								<SearchInfo/>
							</div>
							<MainList productsData={products} showMax={20}/>
						</div>
					</ProductsList>
				</div>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));

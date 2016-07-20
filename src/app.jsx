import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import ProductsList from './components/ProductsList.jsx'
import Filter from './components/Filter.jsx'
import FilterLabel from './components/FilterLabel.jsx'
import FilterItem from './components/FilterItem.jsx'
import FilterColors from './components/FilterColors.jsx'
import FilterColorsItem from './components/FilterColorsItem.jsx'
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
							<Filter size="3">
								<FilterLabel label="Orientation"/>
								<FilterItem label="horizontal" itemClassName="orientation horizontal"/>
								<FilterItem label="Vertical" itemClassName="orientation vertical"/>
							</Filter>
							<Filter size="3">
								<FilterLabel label="Size"/>
								<FilterItem label="90x50mm" count="112"/>
								<FilterItem label="85x55mm" count="67"/>
							</Filter>
							<Filter size="5">
								<FilterLabel label="Customer rating" sublabel="At least"/>
								<FilterItem label="Rating" itemClassName="rating" star={4} count="67"/>
								<FilterItem label="Rating" itemClassName="rating" star={3} count="67"/>
								<FilterItem label="Rating" itemClassName="rating" star={2} count="67"/>
								<FilterItem label="Rating" itemClassName="rating" star={1} count="67"/>
							</Filter>
							<Filter size="2">
								<FilterLabel label="Favorite"/>
								<FilterItem label="Only favorites" count="208"/>
							</Filter>
							<Filter size="8">
								<FilterLabel label="Industry"/>
								<FilterItem label="All" count="208"/>
								<FilterItem label="Automotive" count="112"/>
								<FilterItem label="Fashion" count="83"/>
								<FilterItem label="Law" count="230"/>
								<FilterItem label="IT" count="18"/>
								<FilterItem label="Sport" count="66"/>
								<FilterItem label="Art" count="20"/>
								<FilterItem label="Nature" count="20"/>
							</Filter>
							<FilterColors>
								<FilterColorsItem label="purple" colorValue="#6a71e6"/>
								<FilterColorsItem label="blue" colorValue="#0192ff"/>
								<FilterColorsItem label="bluelight" colorValue="#61d2fe"/>
								<FilterColorsItem label="green" colorValue="#48dc6c"/>
								<FilterColorsItem label="red" colorValue="#fe4a65"/>
								<FilterColorsItem label="orangedark" colorValue="#ff5534"/>
								<FilterColorsItem label="orange" colorValue="#ffa500"/>
								<FilterColorsItem label="yellow" colorValue="#fed201"/>
								<FilterColorsItem label="gray" colorValue="#9fa0a4"/>
							</FilterColors>
							<Filter size="10">
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
								<FilterItem label="Landscape" count="20"/>
							</Filter>
							<ClearFilters label="Clear all filters"/>
						</div>
						<div className="products-list-container">
							<div className="products-list-header">
								<SearchResult countResult="34"/>
								<ProductsListOptions/>
								<ThumbnailSize />
								<SearchInfo/>
							</div>
							<MainList productsData={products} showMax={20}/>
							<Pagination />
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

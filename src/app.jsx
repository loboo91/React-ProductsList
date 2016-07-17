import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./components/Menu.jsx";
import MenuItem from "./components/MenuItem.jsx";
import ProductsList from "./components/ProductsList.jsx";
import Filter from "./components/Filter.jsx";
import FilterItem from "./components/FilterItem.jsx";

export class App extends React.Component {


	render() {
		return (
		<div className="page">
			<header id="header">
				<div className="logo-bar">
					<div className="header-logo">
						<h1>
							<img className="img-logo" src="/assets/images/logo.png" alt="Printbox"/>
						</h1>
					</div>
					<div className="top-bar">
						<Menu class="top-user-nav">
							<MenuItem title="" url ="#" class="user-search" />
							<MenuItem title ="Contact us" url ="#" />
							<MenuItem title ="English" url ="#" class="user-lang"/>
							<MenuItem title ="My Account" url ="#" class="user-account"/>
							<MenuItem title ="Cart" url ="#" class="user-cart"/>
						</Menu>
					</div>
				</div>
				<div className="nav-bar">
					<Menu class="top-nav">
						<MenuItem title ="PHOTOBOOKS" url ="#" />
						<MenuItem title ="CALENDARS" url ="#" />
						<MenuItem title ="CANVAS" url ="#" />
						<MenuItem title ="CARDS" url ="#"  class="active" />
						<MenuItem title ="GIFTS STATIONERY" url ="#" />
					</Menu>
				</div>
		</header>
			<div className="columns-container">
				<div className="container">
					<div className="filters-container">
						<p className="main-list-header">Narrow Results</p>
						<Filter label="Orientation" attributeId="orientation" size="2"/>
						<Filter label="Size" attributeId="size" size="2">
							<FilterItem label="90x50mm" count="112"/>
							<FilterItem label="85x55mm" count="67"/>
						</Filter>
						<Filter label="Customer rating" attributeId="customer rating" size="2"/>
						<Filter label="Favorite" attributeId="favorite" size="1">
							<FilterItem label="Only favorites" count="22"/>
						</Filter>
						<Filter label="Industry" attributeId="industry" size="7">
							<FilterItem label="All" count="840"/>
							<FilterItem label="Automotive" count="112"/>
							<FilterItem label="Fashion" count="83"/>
							<FilterItem label="Law" count="230"/>
							<FilterItem label="IT" count="18"/>
							<FilterItem label="Sport" count="66"/>
							<FilterItem label="Art" count="20"/>
						</Filter>
						<Filter label="Color" attributeId="color" size="2"/>
						<Filter label="Style" attributeId="style" size="9">
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
						<ProductsList />
					</div>
				</div>
			</div>
		</div>
		);
	}

}

ReactDOM.render(
	<App />,
	document.querySelector("#app"));

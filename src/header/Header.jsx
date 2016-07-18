import React from 'react';
import Menu from "./Menu.jsx";
import MenuItem from "./MenuItem.jsx";

export default class Header extends React.Component {
	render()
	{
		return (
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
		);
	}
}

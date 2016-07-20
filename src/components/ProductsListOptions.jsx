import React from 'react';

export default class ProductsListOptions extends React.Component {
	render() {
		return (
			<div className="products-list-options">
				<ul>
					<li>
						Show: <span className="show">20</span>
						<ul>
							<li><span>40</span></li>
							<li><span>80</span></li>
							<li><span>All</span></li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

import React from 'react';

export default class SearchInfo extends React.Component {
	render() {
		return (
			<div className="search-result-info">
				<div className="label">Showing Filters:</div>
				<div className="selected-filters"><span className="selected">One side</span><span className="genericon genericon-close-alt icon-selected-filter-reset "/></div>
				<div className="selected-filters"><span className="selected">Automotive</span><span className="genericon genericon-close-alt icon-selected-filter-reset " /></div>
				<div className="selected-filters"><span className="selected">One side</span><span className="genericon genericon-close-alt icon-selected-filter-reset "/></div>
				<div className="selected-filters"><span className="selected">Law</span><span className="genericon genericon-close-alt icon-selected-filter-reset "/></div>
				<div className="selected-filters"><span className="selected">Children</span><span className="genericon genericon-close-alt icon-selected-filter-reset " /></div>
				<div className="selected-filters"><span className="selected">Vintage</span><span className="genericon genericon-close-alt icon-selected-filter-reset "/></div>
			</div>
		);
	}
}

import React from 'react';

export default class SearchInfo extends React.Component {
	render() {
		return (
			<div className="search-result-info">
				<div className="search-result-info-label">Showing Filters:</div>
				<div className="selected-filters"><span className="label-selected-filter">One side</span><span className="genericon genericon-close-alt icon-selected-filter-reset"/></div>
				<div className="selected-filters"><span className="label-selected-filter">Automotive</span><span className="genericon genericon-close-alt icon-selected-filter-reset" /></div>
				<div className="selected-filters"><span className="label-selected-filter">One side</span><span className="genericon genericon-close-alt icon-selected-filter-reset"/></div>
				<div className="selected-filters"><span className="label-selected-filter">Law</span><span className="genericon genericon-close-alt icon-selected-filter-reset"/></div>
				<div className="selected-filters"><span className="label-selected-filter">Children</span><span className="genericon genericon-close-alt icon-selected-filter-reset" /></div>
				<div className="selected-filters"><span className="label-selected-filter">Vintage</span><span className="genericon genericon-close-alt icon-selected-filter-reset"/></div>
			</div>
		);
	}
}

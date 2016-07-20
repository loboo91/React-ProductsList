import React from 'react';

export default class Pagination extends React.Component {
	render() {
		return (
			<div className="pagination">
				<div><p> <span className="genericon genericon-expand genericon-rotate-90 arrow" /></p></div>
				<div><p> 1 </p></div>
				<div className="active"><p> 2 </p></div>
				<div className="spacer"><p> ... </p></div>
				<div><p> 5 </p></div>
				<div><p> <span className="genericon genericon-expand genericon-rotate-270 arrow" /> </p></div>
			</div>
		);
	}
}

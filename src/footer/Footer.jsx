import React from 'react';
import Section from './Section.jsx'
import SectionItem from './SectionItem.jsx'
export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer-container">
				<div className="social-block-conatiner">
					<div className="social-block">
						<img className="img-logo" src="/assets/images/logo.png" alt="Printbox"/>

						<p className="footer-label">	Join us and hundreds of happy klients on our social media!<br />
						<small>	We have special offers for our amazing Fans :)</small>
						</p>
						<p className="footer-social-icon">
							<span className="genericon genericon-googleplus" />
							<span className="genericon genericon-facebook-alt" />
							<span className="genericon genericon-twitter" />
							<span className="genericon genericon-linkedin" />
						</p>
					</div>
				</div>
				<div className="footer-block-category">
						<Section class="address">
							<SectionItem label="Printbox Sp. z o.o."/>
							<SectionItem label="Main Square 17"/>
							<SectionItem label="31-008 Cracow, Poland"/>
							<SectionItem label="+48 12 881 20 68"/>
							<SectionItem label="sales@getprintbox.com"/>
						</Section>
						<Section label="Categories">
							<SectionItem label="Photobooks"/>
							<SectionItem label="Calendars"/>
							<SectionItem label="Cards"/>
							<SectionItem label="Canvas"/>
							<SectionItem label="Gifts"/>
							<SectionItem label="Stationery"/>
						</Section>
						<Section label="Information">
							<SectionItem label="Contact us"/>
							<SectionItem label="Terms and conditions"/>
							<SectionItem label="About us"/>
							<SectionItem label="Privacy policy"/>
							<SectionItem label="Sitemap"/>
						</Section>
						<Section label="My Account">
							<SectionItem label="My orders"/>
							<SectionItem label="My credit"/>
							<SectionItem label="My addresses"/>
							<SectionItem label="My personal info"/>
							<SectionItem label="My vouchers"/>
				   </Section>
						<Section label="Newsletter">
							<SectionItem label="Get weekly emails with new"/>
							<SectionItem label="blog posts and rabate codes!"/>

						</Section>
				</div>
				<div className="copyright">
					<div className="copyright-box">
						© 2016 Printbox
					</div>
				</div>
			</div>
		);
	}
}

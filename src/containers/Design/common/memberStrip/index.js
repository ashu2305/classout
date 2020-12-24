import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImg from '../../../../assets/images/banner.png';
import paySecure from '../../../../assets/images/pay-secure.png';
// import deleteIcon from '../../assets/images/icons/del.svg';
import heart from '../../../../assets/images/heart.png';

export default class MemberStrip extends React.Component {
	render() {
		return (
			<div className="become-member-section">
				<div className="center-wrapper">
					<div className="become-member">
						<h2>Become Our Member</h2>
						<h4>
							$20 <span>/ Month</span>
						</h4>
						<button className="paynow-button">Paynow</button>
						<div className="secure-box">
							<img src={paySecure} />
							<h3>
								100%
								<br />
								<span>Secure Payment</span>
							</h3>
						</div>
						<div className="secure-box">
							<img src={heart} />
							<h3>
								No Risk
								<br />
								<span>Cancel Anytime</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

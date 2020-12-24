import React from 'react';
import Slider from 'react-slick';
import courseCover from '../../../../assets/images/course-cover.png';
import paySecure from '../../../../assets/images/pay-secure.png';
// import deleteIcon from '../../assets/images/icons/del.svg';
import heart from '../../../../assets/images/heart.png';

export default class UpcommingCourse extends React.Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
		};
		let arrObj = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return (
			<div className="center-wrapper">
				<div className="course-section">
					<h2 className="section-title">
						Upcoming live classNamees <span>(24)</span>
					</h2>
					<div className="course-list">
						<Slider {...settings}>
							{arrObj.map(() => (
								<div className="slide">
									<div className="course-item">
										<div className="course-image">
											<img src={courseCover} />
										</div>
										<div className="course-content">
											<div className="course-status">
												<span className="status-dot orange-bg"></span>Live class
											</div>
											<h3>A beginner’s guide to learning yoga</h3>
											<h5>26 Oct 2020</h5>
											<h5>10:30 AM to 12:30 PM</h5>
											<label className="price">$10.00</label>
										</div>
										<div className="course-btns">
											<button className="red-bg">Enroll Now</button>
											<button className="blue-bg" routerLink="/courseDetails">
												View Details
											</button>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
				<br />
				<br />
			</div>
		);
	}
}

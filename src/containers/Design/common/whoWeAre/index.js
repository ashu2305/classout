import React from 'react';
import Slider from 'react-slick';
//import shape from '../../../../assets/images/shape_1.png';
import shape_2 from '../../../../assets/images/shape_2.png';
import shape_3 from '../../../../assets/images/shape_3.png';

export default class WhoWeAre extends React.Component {
	render() {
		return (
			<div className="who-we-are">
				<div className="center-wrapper">
					<h1 className="section-title light-theme align-center">Who We Are</h1>
					<div className="who-we-section">
						<div className="row">
							<div className="col-md-4">
								<div className="who-we-box">
									<img src={shape_2} />
									<h2>Heading</h2>
									<p>
										Explain the value your additional content will bring to a student’s overall learning experience. Use this
										opportunity to sell potential students on the extra benefits your bonus material provides.
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="who-we-box">
									<img src={shape_2} />
									<h2>Heading</h2>
									<p>
										Explain the value your additional content will bring to a student’s overall learning experience. Use this
										opportunity to sell potential students on the extra benefits your bonus material provides.
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="who-we-box">
									<img src={shape_3} />
									<h2>Heading</h2>
									<p>
										Explain the value your additional content will bring to a student’s overall learning experience. Use this
										opportunity to sell potential students on the extra benefits your bonus material provides.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

import React from 'react';
export default class AboutUs extends React.Component {
	render() {
		return (
			<div className="about-us-section">
				<div className="center-wrapper">
					<div className="row">
						<div className="col-md-6">
							<h1 className="section-title dark-theme">About Us</h1>
							<div dangerouslySetInnerHTML={{ __html: this.props.data.text }}>
							</div>
						</div>
						<div className="col-md-6">
							<img src={this.props.data.image && this.props.data.image.path} alt="about us"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

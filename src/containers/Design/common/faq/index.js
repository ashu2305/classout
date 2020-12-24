import React from 'react';
export default class Faq extends React.Component {
	render() {
		return (
			<div className="frequently-asked-questions">
				<div className="center-wrapper">
					<h1 className="section-title dark-theme align-center">Frequently Asked Questions</h1>
					<div className="question-accordion-section">
						{
							this.props.data && this.props.data.faqList && this.props.data.faqList.map((item,index)=>{
								return <div key={index} className="question-accordion">
								<div className="question-title">
									<span className="accordion-arrow">
										<i className="fa fa-chevron-right"></i>
									</span>
									<label>{item.question}</label>
								</div>
								<div className="question-answer">
								<p>
									{item.answer}
								</p>							
							</div>
							</div>
							
							})
						}
						</div>
				</div>
			</div>
		);
	}
}

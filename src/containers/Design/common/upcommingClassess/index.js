import React from 'react';
import Slider from 'react-slick';
import courseCover from '../../../../assets/images/course-cover.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContentList } from '../../../Content/APIs/action';

class UpcommingClass extends React.Component {
	constructor(props){
		super(props);
		this.state={
			contentList:[]
		}
	}
	componentDidMount(){
		this.props.getContentList((result)=>{
			this.setState({
				contentList:result.data
			})
	})
	}
	renderContents = ()=>{
		let selectedList = [];
			this.state.contentList.forEach((item,index)=>{
				if(this.props.contents && this.props.contents.contents){
					this.props.contents.contents.forEach((item1,index)=>{
						if(item1.program && item1.program.id===item.id){
							selectedList.push(item);
						}
						
					})
				}
				else{
					return;
				}
			
		})
		return selectedList.map((item,index)=>{
			return(
				<div className="slide" key={'content-precview-'+item.id}>
									<div className="course-item">
										<div className="course-image">
											<img src={item.details.courseImage && item.details.courseImage.path} alt={item.details.title}/>
										</div>
										<div className="course-content">
											<div className="course-status">
												<span className="status-dot orange-bg"></span>
												{item.businessType.replace('_'," ")}
											</div>
											<h3 style={{display:'block'}} >{item.details.title}</h3>
											{item.businessType==='LIVE_CLASS' &&
											<>
											<h5 style={{display:'block'}}>{item.liveClassContent.startDate}</h5>
											<h5 style={{display:'block'}}>{new Date(item.liveClassContent.startTimeStamp).getTime()}-{item.liveClassContent.startTimeStamp}</h5>
											</>
											}
											
											<label className="price" >price-{item.pricing && item.pricing.listPriceOneTime}</label>
										</div>
										<div className="course-btns">
											<button className="red-bg">Enroll Now</button>
											<button className="blue-bg" >
												View Details
											</button>
										</div>
									</div>
								</div>
						
			)
		})
	}
	render() {
		// var settings = {
		// 	dots: false,
		// 	infinite: true,
		// 	speed: 500,
		// 	slidesToShow: 4,
		// 	slidesToScroll: 1,
		// };
		let  settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		};
		return (
			<div className="center-wrapper">
				<div className="course-section">
					<h2 className="section-title">
						{this.props.contents && this.props.contents.name} <span>({
					this.props.contents &&	this.props.contents.contents && this.props.contents.contents.length})</span>
					</h2>
					<div className="course-list">
						<Slider {...settings}>
							{this.renderContents()}						
						</Slider>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			getContentList
		}, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcommingClass);

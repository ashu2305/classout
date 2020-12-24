import React from 'react';
import ListingContent from './ContentList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContentList } from '../../../Content/APIs/action';
class ProductRailsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isContentList: false,
			selectedContents:this.convertRailData(props.rails.contents),
			contentList:[],
			name:props.rails.name
		}
	}
	convertRailData = (items)=>{
		let contentList = [];
		if(items){
			contentList = items.map(item=>{
				return item.program ? item.program.id:''
			})
		}
		console.log('mmm',contentList)
		return contentList;
	}
	componentDidMount(){
		this.props.getContentList((result)=>{
			this.setState({
				contentList:result.data
			})
	})
	}
	loadContentList = () => {
		this.setState({
			isContentList: true,
		})
	}
	hideContentList = ()=>{
		this.setState({
			isContentList: false
	})
	}
	addContents = (data) => {
		let selectedContents = this.state.selectedContents;
		selectedContents = selectedContents.concat(data);
		this.setState({
			selectedContents: selectedContents,
			isContentList: false
	},()=>{
	
	})
	
	}
	saveRail = (name,value)=>{
		this.setState({
			[name]:value
		})
	}
	getContentsWithBusinesssType=()=>{
		let selectedContents=[]
		 this.state.contentList.forEach((item,index)=>{
			if(this.state.selectedContents.indexOf(item.id)>=0){
				selectedContents.push({
					id:item.id,
					businessType:item.businessType
				})
			}
		})
		return selectedContents;
	}
	sendRailDataToSave = ()=>{
		let selectedContents = this.getContentsWithBusinesssType();
		this.props.saveRail({name:this.state.name,selectedContents:selectedContents},this.props.selectedFormIndex)
	}
	render() {
		if (this.state.isContentList) {
			return (<ListingContent 
				contentList={this.state.contentList} 
				selectedContents={this.state.selectedContents}
				hideContentList={this.hideContentList}
				addContents={this.addContents} />)
		}
		return (
			<div className="design-outer-container">

				<div className="design-form">
					<form>
						<div className="form-group">
							<label className="field-label">Section Name</label>
							<input
								value={this.state.name}
								onChange={(e) => this.saveRail('name', e.target.value)}
								type="text"
								className="form-control form-control-sm"
							/>
						</div>
						<div className="form-group">
							<label className="field-label">Section Type</label>
							<input
								value="Manually"
								// onChange={(e)=>this.saveRail('name',e.target.value)} 
								type="text"
								readOnly
								className="form-control form-control-sm"
							/>
						</div>
						<div className="form-group">
							<button className="btn btn-primary btn-block-sm" onClick={() => {
								this.loadContentList()
							}}>Add Contents</button>
						</div>
						<button type="button"
                onClick={() => {
                  this.sendRailDataToSave()
                }}
                className="btn btn-blue btn-block">
                Save
										</button>
					</form>
				</div>
				<div className="added-content-list">
					<div className="design-added-course">
						<div className="design-section-accordion">
							{this.renderAddedContents()}
						</div>
					</div>
				</div>
			</div>
		);
	}
	renderAddedContents = () => {
		let addedList = this.state.contentList.filter(item => {
			return this.state.selectedContents.indexOf(item.id) >= 0
		})
		return addedList.map(item => {
			return (
				<div key={'added-cont-'+item.id} className="design-accordion">
					<div className="design-accordion-title">
						<span className="accordion-handle">
							<i className="fas fa-bars"></i>
						</span>
						<div className="design-course-thumb">
							<div className="design-course-image">
								<img src={item.details.courseImage && item.details.courseImage.path} alt={item.details.title} />
							</div>
							<div className="design-course-content">
								<span>{item.details.title}</span>
								<p dangerouslySetInnerHTML={{__html: item.details.description}}></p>
							</div>
						</div>
						{/* <span className="accordion-arrow">
							<i className="fas fa-ellipsis-v"></i>
							<div className="accordion-dropdown">
								<ul>
							<li>
								<i className="fa fa-eye-slash"></i> Unpublish
											</li>
							<li>
								<i className="fa fa-trash-alt"></i> Remove From Section
											</li>
						</ul>
							</div>
						</span> */}
					</div>
				</div>
			)
		})
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductRailsForm);
import React, { createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BannerForm  from './BannerForm';
import Button from '../../../../components/common/Button';
import {
	getBanner,
	uploadFile,
	getLinkDest,
	getLinkTo
} from '../../../Content/APIs/action';


class BanerList extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			banners:this.convertBannerData(props.banners.items),
			linkTo:[],
			linkDest:[]
		}
		this.newBanner={
			image:{
				id:'',
				path:''
			},
			title:'',
			description:'',
			linkOn:'',
			buttonName:'',
			linkDest:'',
			contents:[]
		}
	}
	componentDidMount(){
		this.props.getLinkDest((data)=>{
				console.log('data-->',data)
				this.setState({
					linkDest:data.data
				})
		})
		this.props.getLinkTo((data)=>{
			this.setState({
				linkTo:data.data
			})
	})
	}
	convertBannerData = (items)=>{
		let banners=[];
		if(items){
			banners = items.map((banner,index)=>{
				return({
					buttonName: banner.buttonName,
					description: banner.description,
					image: {
						id: banner.image.id,
						path: banner.image.path
					},
					linkDest: banner.linkDestination,
					linkOn: banner.linkTo,				
					title: banner.title
				})
			})
		}
		return(banners);
	}
	addBanner = ()=>{
		let banners = this.state.banners;
		banners.push(JSON.parse(JSON.stringify(this.newBanner)))
		this.setState({
			banners:banners
		})
	}
	saveBanner = (data,index)=>{
		let banners = this.state.banners;
		banners[index]=data;
		this.setState({
			banners:banners
		})
		this.props.saveBanners(banners,this.props.selectedFormIndex)
	}
	renderBanners = ()=>{
		return this.state.banners.map((item,index)=>{
			return(<BannerForm 
				key={'banner-form-'+index}
				data={item} 
				linkTo={this.state.linkTo}
				linkDest={this.state.linkDest}
				index={index}
				uploadFile={this.props.uploadFile}
				saveBanner={this.saveBanner}
				/>)
		})
	}
	render() {
		return (
			<div>
				<div className="design-section-accordion">
					{
						this.renderBanners()
					}
					
				</div>
			<>
			{/* {
				this.state.banners.length===0 && */}
				<Button 
					bType="button"
					bValue="Add New Banner"
					cName="btn btn-primary btn-block-sm"				
					clickHandler={()=>{this.addBanner()}}
				/>
			{/* } */}
					
			</>	
			
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
			getBanner,
			uploadFile,			
			getLinkDest,
			getLinkTo
		}, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(BanerList);

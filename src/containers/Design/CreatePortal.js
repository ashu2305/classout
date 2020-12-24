import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Banner from './common/banner';
import UpcommingClass from './common/upcommingClassess';
import WhoWeAre from './common/whoWeAre';
import AboutUs from './common/aboutUs';
import Faq from './common/faq';
import ContactUs from './common/contactUs';
import Header from './common/header';
import SortableList from './common/sortable';
import MemberStrip from './common/memberStrip';
import BanerList from './common/BannerForm';
import ContactUsForm from './common/contactUs-form';
import ProductRailsForm from './common/product-rails-form';
import AboutUsForm from './common/AboutUsForm';
import arrayMove from 'array-move';
import Select from 'react-select';
import Button from '../../components/common/Button';
import FaqForm from './common/FaqForm';
import './style.scss';
import {
	createPortal,
	getPortalEnums,
	getPortalById
} from '../Content/APIs/action';
class CreatePortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [],
			home: true,
			type: '',
			banners: [],
			portalEnums: [],
			selectedFormIndex: 0,
			portalId: props.id,
			title: "",
			domainName: "",
			popupErrorTitle:false,
			popupErrorDomain:false
		};
	}
	componentDidMount() {
		this.props.getPortalEnums((data) => {
			this.setState({
				portalEnums: data.data
			})
		})
		if (this.state.portalId) {
			this.props.getPortalById(this.state.portalId, (data) => {
				let portal = data.data;
				let sections = []
				portal.sections.forEach((item,index)=>{
					sections[item.position]=item;
				})
				this.setState({
					domainName: portal.domainName,
					title: portal.title,
					sections:  sections
				})
			})
		}
	}
	updatePortal = (e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	createPortal = () => {
		let sections=this.state.sections.map((item,index)=>{
						item.position = index;
						return item;
		});
		if (this.state.portalId) {
			this.props.createPortal({
				"active": true,
				id: this.state.portalId,
				"domainName": this.state.domainName,
				"sections": sections,
				"title": this.state.title
			})
		}
		else {
			if(this.state.domainName && this.state.title){
				this.props.createPortal({
					"active": true,
					"domainName": this.state.domainName,
					"sections": sections,
					"title": this.state.title
				}, (resp) => {
					this.setState({
						portalId: resp.data,
						popupErrorTitle:false,
						popupErrorDomain:false
					})
				})
			}
			else{
				this.setState({
					popupErrorTitle:!this.state.title,
					popupErrorDomain:!this.state.domainName
				})
			}			
		}
	}
	getOptions = (item) => {
		let avaliableOptions = item.filter(elem => {
			return elem === 'FORM' ||
				elem === 'BANNER' ||
				elem === 'RAIL' ||
				elem === 'ABOUT_US' ||
				elem === 'FOOTER' ||
				elem === 'FAQ' ||
				elem === 'MEMBER_STRIP'
		})
		return avaliableOptions.map(elem => {
			return { label: elem && elem.toString().replaceAll('_', ' '), value: elem }
		})
	}
	onSortItems = ({ oldIndex, newIndex }) => {
		this.setState(({ sections }) => ({
			sections: arrayMove(sections, oldIndex, newIndex),
		}),()=>{
			this.createPortal()
		});
	};

	reorderSection = (item) => {
		this.setState({ sections: item });
	};
	gotoForm = (type, index) => {
		if (type === 'MEMBER_STRIP' || type === 'FOOTER') {
			return null;
		}
		this.setState({ home: false, type: type, selectedFormIndex: index });
	};
	gotoHome = () => {
		this.setState({ home: true });
	};
	saveContents = () => {

	}
	saveBanners = (data, selectedFormIndex) => {

		let bannerObject = {
			"name": "BANNER",
			"portal": {
				"id": this.state.portalId
			},
			"position": selectedFormIndex,
			"sectionType": "BANNER"
		}
		let items = data.map((banner, index) => {
			return ({
				buttonName: banner.buttonName,
				description: banner.description,
				image: {
					id: banner.image.id,
					path: banner.image.path
				},
				linkDestination: banner.linkDest,
				linkTo: banner.linkOn,
				name: banner.title,
				position: index,
				title: banner.title
			})
		})
		bannerObject['items'] = items;
		let sections = this.state.sections;
		sections[selectedFormIndex] = bannerObject;
		this.setState({
			sections: sections
		}, () => {
			this.createPortal()
		})
	}
	saveRail = (rail, index) => {
		let railObject = {

			"name": rail.name,
			"portal": {
				"id": this.state.portalId
			},
			"position": index,
			"railType": "MANUALLY",
			"sectionType": "RAIL"
		}
		let contents = rail.selectedContents.map((item, index) => {
			return ({
				"position": index,
				"program": {
					"id": item.id,
					businessType:item.businessType
				}
			})
		})
		railObject['contents'] = contents;
		let sections = this.state.sections;
		sections[index] = railObject;
		console.log('jjj', sections)
		this.setState({
			sections: sections,
			home: true
		}, () => {
			this.createPortal()
		})
	}
	saveAboutUs = (data, index, id) => {
		let aboutUsObject = {
			name: 'About Us',
			portal: {
				id: this.state.portalId,

			},
			position: index,
			text: data.description,
			title: 'About Us',
			"sectionType": "ABOUT_US"
		}
		if (data.image.id) {
			aboutUsObject['image'] = {};
			aboutUsObject['image']['path'] = data.image.path;
			aboutUsObject['image']['id'] = data.image.id
		}
		if (id) {
			aboutUsObject['id'] = id
		}
		let sections = this.state.sections;
		sections[index] = aboutUsObject;
		this.setState({
			sections: sections,
			home: true
		}, () => {
			this.createPortal()
		})
	}
	saveForm = (formFieldList,data, index, id) => {
		let formObject = {
			contactNumber: data.contactNumber,
			emailId: data.email,
			name: data.formName,
			formAddress: {
				address: data.address
			},
			position: index,
			portal: {
				id: this.state.portalId
			},
			sectionType: 'FORM'
		}
		
		formObject['formFieldList'] = formFieldList;
		let sections = this.state.sections;
		sections[index] = formObject;
		this.setState({
			sections: sections,
			home: true
		}, () => {
			this.createPortal()
		})
	}
	saveFaq = (data, index) => {
		let faqObject = {
			name: 'FAQ',
			portal: {
				id: this.state.portalId,

			},
			position: index,
			title: 'FAQ',
			"sectionType": "FAQ"
		}
		faqObject['faqList'] = data.map(item => {
			return {
				...item,
				faq: {}
			}
		})
		let sections = this.state.sections;
		sections[index] = faqObject;
		this.setState({
			sections: sections,
			home: true
		}, () => {
			this.createPortal()
		})
	}
	addSection = (value) => {
		let sections = this.state.sections;
		let sectionObject = {
			"name": value,
			"portal": {
				"id": this.state.portalId
			},
			"position": sections.length - 1,
			"sectionType": value
		}
		sections.push(sectionObject);
		this.setState({
			sections: sections
		})
	}
	renderSections = () => {
		if (this.state.portalId) {
			return (
				<>
					<SortableList
						onSortItems={this.onSortItems}
						gotoForm={this.gotoForm}
						data={this.state.sections} />
					<div className="select-section">
						<label className="field-label">Add Section</label>
						<Select
							options={this.getOptions(this.state.portalEnums)}
							isClearable={true}
							classNamePrefix="select-menu"
							className="select-menu"
							onChange={(e) => { this.addSection(e ? e.value : '') }}
						/>
					</div>
				</>
			)
		}
		else {
			return (
				<div className="portal-create-popup">
					<div className="portal-create-overlay"></div>
					<div className="portal-create-form">
						<form>
							<div className="form-group">
								<label className="field-label">Title</label>
								<input
									placeholder="Enter Title" 
									value={this.state.title}
									onChange={(e) => this.setState({ title: e.target.value })}
									type="text"
									className="form-control form-control-sm"
								/>
								{this.state.popupErrorTitle && <div className="error-popup">Please Enter Title</div>}								
							</div>
							<div className="form-group">
							<label className="field-label">Domain Name</label>
							<div className="input-group mb-3">						
								<input 
								type="text" 
								className="form-control" 
								placeholder="Enter Domain Name" 
								aria-label="Enter Domain Name" 
								aria-describedby="basic-addon2"
								value={this.state.domainName}
								onChange={(e) => this.setState({ domainName: e.target.value })}
								/>
								<div className="input-group-append">
									<span className="input-group-text" id="basic-addon2">.classout.co</span>
								</div>
							</div>
							</div>
							
							{/* <div className="form-group">
								<label className="field-label">Domain Name</label>
								<input
									value={this.state.domainName}
									onChange={(e) => this.setState({ domainName: e.target.value })}
									type="text"
									className="form-control form-control-sm"
								/>
								
								{this.state.popupErrorDomain && <div className="error-popup">Please Enter Domain Name</div>}
							</div> */}
							<Button
								bType="button"
								bValue="Create Portal"
								cName="btn btn-primary create-portal-button"
								clickHandler={() => { this.createPortal() }}
							/>
							<Button
								bType="button"
								bValue="Cancel"
								cName="btn btn-secondary create-portal-button"
								clickHandler={() => { this.props.showPortalList() }}
							/>
						</form>

					</div>
				</div>
			)
		}

	}
	render() {
		const { type } = this.state;
		return (
			<div className="create-portal-wrapper">

				<Header 
				title={this.state.title}
				domainName={this.state.domainName}
				createPortal={this.createPortal}
				updatePortal={this.updatePortal}
				showPortalList={this.props.showPortalList}
				 />
				<div className="design-landing">
					<div className="design-panel">
						<div className="back-link">
							{/* <i onClick={() => this.gotoHome()} className="fa fa-chevron-left"></i>  */}
							<label>Main</label>
						</div>
						<div>
							{this.state.home ? (
								<>
									{this.renderSections()}
								</>
							) : (
									<div>
										<h3 className="design-title">	{
											type && type.toString().replaceAll('_', ' ')
										}</h3>
										<div>
											{
												this.renderSectionForm(type)
											}
										</div>
									</div>
								)}
						</div>
					</div>
					<div className="preview-panel">
						{this.renderPreview()}
					</div>
				</div>
			</div>
		);
	}
	renderSectionForm = (type) => {
		switch (type) {
			case 'BANNER':
				return <BanerList
					selectedFormIndex={this.state.selectedFormIndex}
					banners={this.state.sections[this.state.selectedFormIndex]}
					saveBanners={this.saveBanners}
				/>;
			case 'RAIL':
				return <ProductRailsForm
					rails={this.state.sections[this.state.selectedFormIndex]}
					selectedFormIndex={this.state.selectedFormIndex}
					saveRail={this.saveRail}
				/>;
			case 'FAQ':
				return <FaqForm
					selectedFormIndex={this.state.selectedFormIndex}
					data={this.state.sections[this.state.selectedFormIndex]}
					saveFaq={this.saveFaq}
				/>;
			case 'FORM':
				return <ContactUsForm saveForm={this.saveForm}
					selectedFormIndex={this.state.selectedFormIndex}
					data={this.state.sections[this.state.selectedFormIndex]}
				/>;
			case 'CONTACT_US':
				return <ContactUsForm
					saveForm={this.saveForm}
					selectedFormIndex={this.state.selectedFormIndex}
					data={this.state.sections[this.state.selectedFormIndex]}
				/>;
			case 'ABOUT_US':
				return <AboutUsForm
					saveAboutUs={this.saveAboutUs}
					selectedFormIndex={this.state.selectedFormIndex}
					data={this.state.sections[this.state.selectedFormIndex]}
				/>;
			case 'MEMBER_STRIP':
				return <MemberStrip />;
			default:
				break;
		}
	}
	renderPreview = () => {
		return this.state.sections.map((data, index) => {
			switch (data.sectionType) {
				case 'BANNER':
					return <Banner key={"baner-section" + index} banners={data} />;
				case 'RAIL':
					return <UpcommingClass key={"rails-section" + index} contents={data} />;
				case 'WHO_WE_ARE':
					return <AboutUs key={"whoweare-section" + index} />;
				case 'FAQ':
					return <Faq data={data} key={"faq-section" + index} />;
				case 'CONTACT_US':
					return <ContactUs key={"contact-section" + index} />;
				case 'FORM':
					return <ContactUs data={data} key={"contact-section" + index} />;
				case 'ABOUT_US':
					return <AboutUs key={"about-section" + index} data={data} />;
				case 'MEMBER_STRIP':
					return <MemberStrip key={"member-section" + index} />;
				case 'FOOTER':
					return (
						<footer key={"footer-section" + index} className="footer">
							<div className="center-wrapper">
								<div className="footer-links">
									<div className="row">
										<div className="col-md-6">
											<div className="links">
												<ul>
													<li>
														<a href="#">Privacy Policies</a>
													</li>
													<li>
														<a href="#">Terms of Services</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-md-6">
											<div className="social-media">
												<ul>
													<li>
														<a href="#">
															<img src="/assets/images/facebook.png" alt="facebook" />
														</a>
													</li>
													<li>
														<a href="#">
															<img src="/assets/images/twitter.png" alt="twitter" />
														</a>
													</li>
													<li>
														<a href="#">
															<img src="/assets/images/whatsapp.png" alt="whatsapp" />
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="copyright">
									<div className="row">
										<div className="col-md-6">
											<span>© Copyright Vaibhav's School 2020</span>
										</div>
										<div className="col-md-6 text-right">
											<span>Digitalize with Virture </span>
										</div>
									</div>
								</div>
							</div>
						</footer>
					)
				default:
					break;
			}
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
			createPortal,
			getPortalEnums,
			getPortalById
		}, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePortal);


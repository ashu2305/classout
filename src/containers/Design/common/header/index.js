import React from 'react';
export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isError:false,
			title:'',
			domain:''
		}
	}
	render() {
		return (
			<div className="review-header"> 
				<ul className="header-wrapper">
					<li className="close-portal" onClick={this.props.showPortalList}>x</li>
					<li className="title">Design your website</li>
					<li className="portal-title">
						<span className="portal-title-label">Title  </span>
						<input 
						name="title"
						placeholder="Enter Title"
						value={this.props.title}
						onChange={this.props.updatePortal}
						className="portal-title-input" 
						type="text"></input>
					</li>
					<li className="portal-domain">
					<span className="portal-title-label">Domain  </span>
						<input 
						name="domainName"
						placeholder="Enter Domain"
						value={this.props.domainName}
						onChange={this.props.updatePortal}
						className="portal-title-input" 
						type="text"></input>	
						<span>.classout.co</span>				
					</li>
					<li className="portal-domain">
					<button type="button"
                onClick={() => {
									if(this.props.domainName && this.props.title){
										this.props.createPortal()
									}
									else {
										this.setState({
											isError:true
										})
									}

                }}
                className="btn btn-transperant">
                Update
										</button>
					</li>
				</ul>

			</div>
		);
	}
}

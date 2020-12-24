import React from 'react';
export default class ContactUs extends React.Component {
	render() {
		return (
			<div className="contact-us-section">
				<div className="center-wrapper">
					<div className="row">
						<div className="col-md-6">
								<h1 className="section-title dark-theme">{this.props.data.name}</h1>
							<form>
								{
									this.props.data.formFieldList && this.props.data.formFieldList.map((item,index)=>{
											
											if(item.formFieldMaster.id !== 4){
											return(
												<div className="form-group" 
												key={'contact-'+item.formFieldMaster && item.formFieldMaster.fieldName}>
													<label className="field-label">
														{item.formFieldMaster && item.formFieldMaster.fieldName}
													</label>
													<input 
													type={item.formFieldMaster && item.formFieldMaster.inputType} 
													className="form-control form-control-sm" />
												</div>
											)}
											else{
												return(
													<div className="form-group" 
													key={'contact-'+item.formFieldMaster && item.formFieldMaster.fieldName}>
														<label className="field-label">
															{item.formFieldMaster && item.formFieldMaster.fieldName}
														</label>
														<input 
														type={item.formFieldMaster && item.formFieldMaster.inputType} 
														className="form-control-msg form-control form-control-sm" />
													</div>
												)
											}
									})
								}
								<div className="form-btn">
									<button type="button" className="btn btn-blue">Submit</button>
								</div>
							</form>
						</div>
						<div className="col-md-6">
							<div className="icon-text-section">
								<span className="icon-placement">
									<i className="fas fa-map-marker-alt"></i>
								</span>
								
								<p>{this.props.data.formAddress ? this.props.data.formAddress.address:''}</p>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="icon-text-section">
										<span className="icon-placement">
											<i className="far fa-envelope"></i>
										</span>
										<p>{this.props.data.emailId}</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="icon-text-section">
										<span className="icon-placement">
											<i className="fas fa-mobile-alt"></i>
										</span>
											<p>{this.props.data.contactNumber}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

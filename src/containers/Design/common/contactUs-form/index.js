import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	getFormFields
} from '../../../Content/APIs/action';
class ContactUsForm extends React.Component {
	constructor(props){
		super(props)
		this.state={
			formFields:[],
			formData:{
				formName:props.data.name?props.data.name:'',
				address:props.data.formAddress.address?props.data.formAddress.address:'',
				contactNumber: props.data.contactNumber?props.data.contactNumber:'',
				email: props.data.emailId?props.data.emailId:'',
				selectedFormFields:[]				
			}
		}
	}
	componentDidMount(){
		let selectedFormFields = this.state.formData.selectedFormFields;
		this.props.data.formFieldList.forEach((items)=>{
			selectedFormFields.push(items.formFieldMaster.id);
		})
		selectedFormFields.sort();
		let formData = this.state.formData;
		formData.selectedFormFields=selectedFormFields;
		this.setState({formData:formData})
		this.props.getFormFields((data)=>{
			this.setState({
				formFields:data.data
			})
		})
	}
	saveForm = ()=>{
		let formData = this.state.formData;
		let formFieldList = [];
		let position = 0;
		this.state.formFields.forEach((item,index)=>{
			if(formData.selectedFormFields.indexOf(item.id)>=0){
				formFieldList.push({					
						formFieldMaster: item,
						inputLength: 100,
						placeholder: 'Enter Your '+item.fieldName,
						position: position,
						required: false					
				})
				position++;
			}
		})
		
		this.props.saveForm(formFieldList,this.state.formData,this.props.selectedFormIndex)
	}
	handleChange = (e)=>{
		let formData= this.state.formData;
		formData[e.target.name]=e.target.value;
		this.setState({formData:formData})
	}
	handleCheckBoxChange = (id,value)=>{
		let index = this.state.formData.selectedFormFields.indexOf(id);
		let selectedFormFields = this.state.formData.selectedFormFields;
		if(value){
			selectedFormFields.push(id)
		}
		else{
			selectedFormFields.splice(index,1);
		}
		let formData = this.state.formData;
		formData.selectedFormFields=selectedFormFields;
		this.setState({formData:formData})
	}
	render() {
		const {formData}=this.state;
		return (
			<div>
				<div className="design-form">
					<form>
						<div className="form-group">
							<label className="field-label">Form Name</label>
							<input 
							type="text" 
							value={formData.formName}
							name="formName"
							onChange={this.handleChange}
							className="form-control form-control-sm"
							 />
						</div>
						<div className="form-group">
							<label className="field-label">Add your address</label>
							<input 
							type="text" 
							value={formData.address}
							name="address"
							onChange={this.handleChange}
							className="form-control form-control-sm" />
						</div>

						<div className="form-group">
							<label className="field-label">Contact Number</label>
							<input 
							type="number" 
							value={formData.contactNumber}
							name="contactNumber"
							onChange={this.handleChange}
							className="form-control form-control-sm" />
						</div>
						<div className="form-group">
							<label className="field-label">contact Email </label>
							<input type="text"
							value={formData.email}
							name="email"
							onChange={this.handleChange} 
							className="form-control form-control-sm"
							 />
						</div>
						<div className="form-group">
							<label className="field-label">Create Form</label>
							<div className="input-group mb-2 mr-sm-2">
								{
									this.state.formFields.map((item,index)=>{
										return(
											<div className="form-group" key={'form-fields-'+item.id}>
												<input 
												type="checkbox" 
												id={'form-field-'+item.id}
												onChange={(e)=>this.handleCheckBoxChange(item.id,e.target.checked)}
												checked={formData.selectedFormFields.indexOf(item.id)>=0}
												className="form-control form-control-sm" />
												<label htmlFor={'form-field-'+item.id} className="field-label">{item.fieldName}</label>
											</div>
										)
									})
								}
							</div> 
						</div>
						<div className="form-btn">
							<button 
							onClick={()=>{	this.saveForm()}}
							type="button" 
							className="btn btn-blue btn-block">
								Save
							</button>
							{/* <button type="button" className="btn btn-light">
								<i className="fa fa-trash-alt"></i> Delete
							</button> */}
						</div>
					</form>
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
			getFormFields
		}, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactUsForm);
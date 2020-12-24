import React, {Component} from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLanguage,
    getLevels,
    getCategories,
    getSubCategories,
    uploadFile 
} from '../APIs/action';
import Button from '../../../components/common/Button';
import DatePicker from 'react-datepicker';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "react-datepicker/dist/react-datepicker.css";
import {Wrapper} from './style';
import AddIcon from '../../../assets/images/icons/add.svg';
import Vector from '../../../assets/images/icons/vector.png';
class ScheduleMeeting extends Component{
    constructor(props){
        super(props);
        this.state={
                       
        }
       
        
    }
    componentWillReceiveProps(nextProps){
       
    }
    fileUpload = (e)=>{
        
    }
    
    componentDidMount(){
        // this.props.getLanguage((data)=>{
        //     this.setState({
        //         languages:data
        //     })
        // })
        // this.props.getLevels((data)=>{
        //     this.setState({
        //         levels:data
        //     })
        // })
        // this.props.getCategories((data)=>{
        //     this.setState({
        //         categories:data
        //     })
        // })
        // this.props.getSubCategories((data)=>{
        //     this.setState({
        //         subCategories:data
        //     })
        // })
    }
    deletePrerequisites = (index)=>{
       
    }
    addMorePreRequisites = ()=>{
        
    }
    updatePreRequisites = (index,value,name)=>{
        
    }
    changeHandler = (value,name)=>{
        
    }
    getOptions = (item)=>{
        
    }
    getDefault=(items,id)=>{
        
    }
     render(){
        return(
            <Wrapper>
                 <h3 onClick={()=>{
                this.props.backToCalander()
            }}><i className="left-arrow"></i>Schedule Meeting</h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="field-group">
                            <label>Item Title <span>*</span></label>
                            <input 
                            //value=""
                            //onChange={(e)=>{this.changeHandler(e.target.value,'title')}} 
                            className="form-control" />
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="field-group">
                            <label>Course Image<span>*</span></label>
                            <div className="upload-container">
                                {/* <img src={this.state.formData.image?this.state.formData.image:Vector} alt="Upload" /> */}
                                <div className="file-upload">
                                    <span>Upload Image</span>
                                    <input type="file" onChange={(e)=>this.fileUpload(e)} />
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="button-group">
                        <Button 
                            bType="button"
                            bValue="Schedule"
                            cName="btn btn-primary"
                            clickHandler={()=>{this.props.handleSave('course',this.state.formData)}}
                        />
                        
                </div>
            </Wrapper>
            
        )
     }    
}

function mapStateToProps(state) {
    return {
      
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators({
        getLanguage,
        getLevels,
        getCategories,
        getSubCategories,
        uploadFile
      }, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ScheduleMeeting);
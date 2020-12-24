import React, {Component} from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLanguage,
    getLevels,
    getCategories,
    getSubCategories,
    uploadFile 
} from '../../APIs/action';
import Button from '../../../../components/common/Button';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "react-datepicker/dist/react-datepicker.css";
import {Wrapper} from './style';
import AddIcon from '../../../../assets/images/icons/add.svg';
import Vector from '../../../../assets/images/icons/vector.png';
class CourseDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            formData:{
            title:props.contentData.title,
            description:props.contentData.description,
            image:props.contentData['courseImage']?props.contentData['courseImage']['path']:'',
            imageId:props.contentData['courseImage'] ?props.contentData['courseImage']['id']:'',
            language : props.contentData['language']? props.contentData['language']['id']: null,
            level: props.contentData['level']? props.contentData['level']['id']: null,
            category: props.contentData['category']?props.contentData['category']['id']:null,
            subCategory: props.contentData['subCategory']? props.contentData['subCategory']['id']:null,
            isLive:props.contentData.liveClass,
            startDate:props.contentData['startDate']?new Date(props.contentData['startDate']):new Date(),
            endDate:props.contentData['endDate']?new Date(props.contentData['endDate']):new Date(),
            prerequisites:props['prerequisites']
        },
        languages:[],
        levels:[],
        categories:[],
        subCategories:[]            
        }
        this.ckEditor={};
        
    }
    componentWillReceiveProps(nextProps){
        let formData = this.state.formData;
         formData={
            title:nextProps.contentData.title,
            description:nextProps.contentData.description,
            image:nextProps.contentData['courseImage'] && nextProps.contentData['courseImage']['path'],
            imageId:nextProps.contentData['courseImage'] && nextProps.contentData['courseImage']['id'],
            language : nextProps.contentData['language']? nextProps.contentData['language']['id']: null,
            level: nextProps.contentData['level']? nextProps.contentData['level']['id']: null,
            category: nextProps.contentData['category']?nextProps.contentData['category']['id']:null,
            subCategory: nextProps.contentData['subCategory']? nextProps.contentData['subCategory']['id']:null,
            isLive:nextProps.liveClass,
            startDate:nextProps.contentData['startDate']?new Date(nextProps.contentData['startDate']):new Date(),
            endDate:nextProps.contentData['endDate']?new Date(nextProps.contentData['endDate']):new Date(),
            prerequisites:nextProps['prerequisites']
        }

        this.setState({
            formData:formData
        },()=>{
            this.ckEditor.setData && this.ckEditor.setData(nextProps.contentData.description);
        })
      //  
    }
    fileUpload = (e)=>{
        this.props.uploadFile(e.target.files, (type,percentCompleted) => {
            if(type==='completed'){
                let formData = this.state.formData;
                formData['image']=percentCompleted.data.path
                formData['imageId']=percentCompleted.data.id
                this.setState({
                    formData:formData
                })                
            }
        }) 
    }
    
    componentDidMount(){
        this.props.getLanguage((data)=>{
            this.setState({
                languages:data
            })
        })
        this.props.getLevels((data)=>{
            this.setState({
                levels:data
            })
        })
        this.props.getCategories((data)=>{
            this.setState({
                categories:data
            })
        })
        this.props.getSubCategories((data)=>{
            this.setState({
                subCategories:data
            })
        })
    }
    deletePrerequisites = (index)=>{
        let formData = this.state.formData;
        formData.prerequisites.splice(0,1);
        this.setState({
            formData:formData
        })
    }
    addMorePreRequisites = ()=>{
        let formData = this.state.formData;
        formData.prerequisites.push({
            name:''
        })
        this.setState({
            formData:formData
        })
    }
    updatePreRequisites = (index,value,name)=>{
        let formData = this.state.formData;
        formData.prerequisites[index]['name']=value;
        this.setState({
            formData:formData
        })
    }
    changeHandler = (value,name)=>{
        let formData= this.state.formData
        formData[name]=value;
        this.setState({
            formData:formData
        })
    }
    getOptions = (item)=>{
        return item.map(elem=>{
            return {label:elem.name,value:elem.id}
        })
    }
    getDefault=(items,id)=>{
        let defalutObj ={label:'',value:''}
        items.forEach(elem=>{
            if(id===elem.id){
                defalutObj = {label:elem.name,value:elem.id}
            }
        })
        return defalutObj;
    }

    handleSave = () => {
        
        const{title, description}  = this.state.formData;
        let error = '';
        if(title.trim() === '' && description.trim() === ''){
            error = "Please fill class name and description";
        }
        else{
            if(title.trim() === ''){
                error = "Please fill class name. ";
            }
            if(description.trim() === ''){
                error = "Please fill class description";
            }
        }
        if(error === ''){
            this.props.handleSave('course',this.state.formData);
        }else{
            window.alert(error);
        }

    }
     render(){
        return(
            <Wrapper>
                <h3>Live Class Details</h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="field-group">
                            <label>Name<span>*</span></label>
                            <input 
                            value={this.state.formData.title} 
                            onChange={(e)=>{this.changeHandler(e.target.value,'title')}} 
                            className="form-control" />
                        </div>
                        <div className="field-group">
                            <label>Description <span>*</span></label>
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Hello from CKEditor 5!</p>"
                                onInit={ editor => {
                                    this.ckEditor = editor;
                                    // You can store the "editor" and use when it is needed.
                                    editor.setData(this.state.formData.description);
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {

                                    const data = editor.getData();
                                    let divElem = document.createElement('div');
                                    divElem.innerHTML = data;
                                   this.changeHandler(data,'description')
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group select-group">
                                    <label>Language </label>
                                    <Select 
                                        options={this.getOptions(this.state.languages)} 
                                        value={this.getDefault(this.state.languages,this.state.formData.language)}
                                        isClearable={true}
                                        classNamePrefix="select-menu"
                                        className="select-menu"
                                        onChange={(e)=>{
                                           // this.props.updateLanguage(e?e.label:'')
                                            this.changeHandler(e?e.value:'','language')}}                                        
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group select-group">
                                    <label>Level </label>
                                    <Select 
                                       options={this.getOptions(this.state.levels)} 
                                       value={this.getDefault(this.state.levels,this.state.formData.level)}
                                        isClearable={true}
                                        classNamePrefix="select-menu"
                                        className="select-menu"
                                        defaultValue={this.state.formData.level}
                                        onChange={(e)=>{
                                           // this.props.updateLabel(e?e.label:'')
                                            this.changeHandler(e?e.value:'','level')}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group select-group">
                                    <label>Category </label>
                                    <Select 
                                        options={this.getOptions(this.state.categories)} 
                                        value={this.getDefault(this.state.categories,this.state.formData.category)}
                                        isClearable={true}
                                        classNamePrefix="select-menu"
                                        className="select-menu"
                                        defaultValue={this.state.formData.category}
                                        onChange={(e)=>{
                                            this.changeHandler(e?e.value:'','category')
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group select-group">
                                    <label>Subcategory </label>
                                    <Select 
                                        options={this.getOptions(this.state.subCategories)} 
                                        value={this.getDefault(this.state.subCategories,this.state.formData.subCategory)}
                                        isClearable={true}
                                        classNamePrefix="select-menu"
                                        className="select-menu"
                                        defaultValue={this.state.formData.subCategory}
                                        onChange={(e)=>{
                                            this.changeHandler(e?e.value:'','subCategory')
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field-group">
                            <label>Any Prerequisites?</label>
                            {this.state.formData.prerequisites.map((inputField, index) => (
                                <div className="added-input">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="prerequisites"
                                        placeholder="Example: Calculator for calculation" 
                                        value={inputField.name}
                                        onChange={e => this.updatePreRequisites(index, e.target.value,'prerequisites')}
                                    />
                                    {
                                        this.state.formData.prerequisites.length > 1 &&
                                            <span className="remove-field" onClick={() => this.deletePrerequisites(index)}></span>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="add-more">
                            <span onClick={() => this.addMorePreRequisites()}><img src={AddIcon} alt="add" />Add More</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="field-group">
                            <label>Class Image</label>
                            <div className="upload-container">
                                <img src={this.state.formData.image?this.state.formData.image:Vector} alt="Upload" />
                                <div className="file-upload">
                                    <span>Upload Image</span>
                                    <input type="file" accept="image/png, image/jpeg" onChange={(e)=>this.fileUpload(e)} />
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="button-group">
                        <Button 
                            bType="button"
                            bValue="Next"
                            cName="btn btn-primary"
                            clickHandler={()=>{this.handleSave()}}
                        />
                        {/* <Button 
                            bType="button"
                            bValue="Preview"
                            cName="btn btn-primary btn-blue"
                        /> */}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
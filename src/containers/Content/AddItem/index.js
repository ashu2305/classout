import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  saveEduContent,
  saveNonEduContent,
  getCourseData 
} from '../APIs/action';
import TopBar from './TopBar';
import Steps from './Steps';
import CourseDetails from './CourseDetails';
import Curriculum from './Curriculum';
import Pricing from './Pricing';
import Button from '../../../components/common/Button';
import {Wrapper, RightContainer} from './style';


class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:1,
            contentData:{}
        }        
        this.contentData={
            "active": true,
            "businessType": props.businessType,
            "details":{
              "category": {
                "active": true,
                "id": 0,
                "name": ""
              },
              "description": "",
              "language": {
                "active": true,
                "id": 0,
                "name": ""
              },
              "level": {
                "active": true,
                "id": 0,
                "name": ""
              },              
              "subCategory": {
                "active": true,
                "category": {
                  "active": true,
                  "id": 0,
                  "name": ""
                },
                "id": 0,
                "name": ""
              },
              "title": "",
              "endDate": new Date(),
            "liveClass": true,
            "startDate": new Date(),
            },
            "prerequisites": [
              {
                "active": true,                
                "name": ""
              }
            ],
            "contents": [
              {
                
                "subContents": [
                ],
                "title": ""
              }
            ],
            "pricing": {
              "active": true,
              "classType": "",
              "currency": {
                
              },              
              "listPriceMonthly": 0,
              "listPriceOneTime": 0,
            }
            
        }
    }
    componentDidMount(){
      if(this.props.courseId){
        this.props.getCourseData(this.props.courseId,(data)=>{
          this.contentData=data.data;
          this.setState({
            contentData:data.data
          })
        })
        console.log('courseId',this.props.courseId)
      }
    }
    setActiveTab = (tab)=>{
        if(tab>3){
            this.props.saveContent(this.contentData);
        }
        this.setState({
            activeTab:tab
        })
    }
    handleCourseData = (data)=>{
      this.contentData['details']['category']={id:data.category}
      this.contentData['details']['language']={id:data.language}
      this.contentData['details']['level']={id:data.level} 
      this.contentData['details']['subCategory']={id:data.subCategory}
      this.contentData['details']['title']=data.title;
      this.contentData['details']['description']=data.description;
      this.contentData['details']['startDate']=data.startDate;
      this.contentData['details']['endDate']=data.endDate;
      if(data.imageId){
        this.contentData['details']['courseImage']={}
        this.contentData['details']['courseImage']['id']=data.imageId;
        this.contentData['details']['courseImage']['path']=data.image;
      }
      
      this.contentData['details']['liveClass']=data.isLive;

      data.prerequisites.forEach(item=>{
        this.contentData['prerequisites'].push(item)
      })
      this.setState({
        activeTab:2
    }) 
    }
    handleSections = (data)=>{
        this.contentData.contents = data;
          this.setState({
            activeTab:3
        })
    }
    handlePricing = (data)=>{
      this.contentData.pricing['classType']=data.classType?'PAID':'FREE';
      if(data.classType){
        this.contentData.pricing['currency'] = {id:data.currency};
      }
      else{   
        delete this.contentData.pricing['currency']; 
      }
      this.contentData.pricing['listPriceMonthly']=data.listPriceMonthly;
      this.contentData.pricing['listPriceOneTime']=data.listPriceOneTime;

      const{title, description}  = this.contentData.details;
      console.log(this.contentData.details);
        let error = '';
        if(title.trim() === '' && description.trim() === ''){
            error = "Please fill class name and description in Step 1(Course Details).";
        }
        else{
            if(title.trim() === ''){
                error = "Please fill class name in Step 1(Course Details). ";
            }
            if(description.trim() === ''){
                error = "Please fill class description in Step 1(Course Details). ";
            }
        }
        if(error === ''){
          if(this.props.businessType==='EDUCATIONAL'){
            this.props.saveEduContent(this.contentData,()=>{
              this.props.changeScreen('START');
            })
          }
          else if(this.props.businessType==='NON_EDUCATIONAL'){
            this.props.saveNonEduContent(this.contentData,()=>{
              this.props.changeScreen('START');
            })
          }
          else{
            this.props.saveNonEduContent(this.contentData,()=>{
              this.props.changeScreen('START');
            })
          }
        }else{
            window.alert(error);
        }
    }
    
    handleSave=(type,data)=>{
        if(type==='course'){
            this.handleCourseData(data)
        }
        else if(type==='curriculum'){
            this.handleSections(data);
        }
        
        else{
            this.handlePricing(data);
        }
    }
    render(){
        return(
            <>
                <TopBar changeScreen={this.props.changeScreen}/>
                <Wrapper className="d-flex">
                    <Steps activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
                    <RightContainer>
                        {this.state.activeTab===1 && <CourseDetails 
                        contentData={this.contentData.details} 
                        prerequisites={this.contentData.prerequisites}
                        handleSave={this.handleSave}/>}
                        {this.state.activeTab===2 && <Curriculum 
                        contentData={this.contentData}                         
                        handleSave={this.handleSave}/>}
                        {this.state.activeTab===3 && <Pricing 
                        contentData={this.contentData.pricing} 
                        handleSave={this.handleSave}/>}
                        
                    </RightContainer>
                </Wrapper>
            </>
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
        saveEduContent,
        saveNonEduContent,
        getCourseData
      }, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddItem);

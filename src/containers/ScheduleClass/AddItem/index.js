import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  saveLiveClass,
  getCourseData 
} from '../APIs/action';
import TopBar from './TopBar';
import Steps from './Steps';
import CourseDetails from './CourseDetails';
import Schedule from './Schedule';
import Pricing from './Pricing';
import Congratulation from './Congratulation'
import Button from '../../../components/common/Button';
import {Wrapper, RightContainer} from './style';


class LiveClass extends Component{
    
  constructor(props){
    super(props);
    this.state={
        activeTab:1,
        congratulation: 0,
        linkData: {},
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
        },
        
        "prerequisites": [
          {
            "active": true,                
            "name": ""
          }
        ],
        
        "liveClassContent": {
          "active": true,
          "courseType": "",
          "endTimeStamp": "",          
          "selectDays": true,
          "startTimeStamp": "",
          "title": "string",
          "weekDays": [
            
          ]
        },
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
      if(!data.data.details.category){
        data.data.details['category'] = {id: 0,active:true,name:''}
      }
      if(!data.data.details.language){
        data.data.details['language'] = {id: 0,active:true,name:''}
      }
      if(!data.data.details.level){
        data.data.details['level'] = {id: 0,active:true,name:''}
      }
      if(!data.data.details.subCategory){
        data.data.details['subCategory'] = {id: 0,active:true,name:'',category: {id: 0,active:true,name:''}}
      }
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
  if(data.category === 0)
  {
    this.contentData['details']['category'] = null;
  }
  if(data.language === 0){
    this.contentData['details']['language'] = null;
  }
  if(data.level === 0){
    this.contentData['details']['level'] = null;
  }
  if(data.subCategory === 0){
    this.contentData['details']['subCategory'] = null;
  }
  if(data.imageId){
    this.contentData['details']['courseImage']={}
    this.contentData['details']['courseImage']['id']=data.imageId;
    this.contentData['details']['courseImage']['path']=data.image;
  }  
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
      this.props.saveLiveClass(this.contentData,(res)=>{
        this.setState({
          congratulation:1,
          linkData: res.data
        })
      })
    }else{
      window.alert(error);
    }
  
}
handleLiveClass= (data)=>{
  delete this.contentData.contents;
  this.contentData.liveClassContent = {};
  this.contentData.liveClassContent['courseType']=data.fullCourse?"FULL_COURSE":"WORKSHOP";
  this.contentData.liveClassContent['endTimeStamp']=new Date(data.endTimeStamp).getTime();
  this.contentData.liveClassContent['startTimeStamp']=new Date(data.startTimeStamp).getTime();
  this.contentData.liveClassContent['startDate'] = new Date(data.startDate).getTime();
  this.contentData.liveClassContent['endDate'] = new Date(data.endDate).getTime();
  this.contentData.liveClassContent['title']=data.title;
  let dates = [];
  if(data.daily || this.contentData.liveClassContent['courseType']==='WORKSHOP'){
    this.contentData.liveClassContent['selectDays'] = false;
    this.contentData.liveClassContent['weekDays']=[];
  }
  else{
    this.contentData.liveClassContent['selectDays'] = true;
    let counter = 1;
    for(let key in data.dates){
      if(data.dates[key]){
        dates.push({id:counter,name:key})        
      }
      counter++;
    }
  }
  this.contentData.liveClassContent['weekDays']=dates; 
  this.setState({
    activeTab:3
}) 
}
handleSave=(type,data)=>{
    if(type==='course'){
        this.handleCourseData(data)
    }
    else if(type==='curriculum'){
        this.handleSections(data);
    }
    else if(type==='liveclass'){
      this.handleLiveClass(data)
    }
    else{
        this.handlePricing(data);
    }
}
render(){
  if(this.state.congratulation === 1){
    return(
      <Congratulation 
      backToCalander = {this.props.backToCalander}
      changeScreen = {this.props.changeScreen}
      linkData = {this.state.linkData}

      />
    );
  }
  else{
    return(
        <>
            <TopBar backToCalander={this.props.backToCalander} changeScreen={this.props.changeScreen}/>
            <Wrapper className="d-flex">
                <Steps activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
                <RightContainer>
                    {this.state.activeTab===1 && <CourseDetails 
                    contentData={this.contentData.details} 
                    prerequisites={this.contentData.prerequisites}
                    handleSave={this.handleSave}/>}
                    {this.state.activeTab===2 && <Schedule 
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

}
function mapStateToProps(state) {
    return {
      
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators({
        saveLiveClass,
        getCourseData
      }, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LiveClass);

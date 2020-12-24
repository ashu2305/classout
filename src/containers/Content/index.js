import React from 'react';
import ListingContent from './Listing/ListingContent';
import StartContent from './Listing/startcontent'
import AddItem from './AddItem';
import {Wrapper} from './style';
import LiveClass from '../../containers/ScheduleClass/AddItem';

class Content extends React.Component{
  constructor(props){
      super(props);
      this.state={
        screenType:'START',
        businessType:'',
        courseId:''
      }
  }
  changeScreen = (type)=>{
      this.setState({
          screenType:type,
          businessType:'',
          courseId:''
        })
  }
  gotoEdit = (courseId,businessType)=>{
    this.setState({  
        screenType:'ADD_ITEM',      
        businessType:businessType,
        courseId:courseId
    })
  }
  render(){
      if(this.state.screenType==='START'){
          return(
            <Wrapper>
            <ListingContent 
            gotoEdit={this.gotoEdit} 
            changeScreen={this.changeScreen}
             />
          </Wrapper>
          )
      }
      else{
          if(this.state.businessType){
            return(<Wrapper>
                {
                    this.state.businessType==='LIVE_CLASS' &&                    
                    <LiveClass 
                    businessType={this.state.businessType} 
                    courseId={this.state.courseId}
                    changeScreen={this.changeScreen}/>
                }
                {
                    this.state.businessType!=='LIVE_CLASS' &&                    
                    <AddItem 
                    businessType={this.state.businessType} 
                    courseId={this.state.courseId}
                    changeScreen={this.changeScreen}/>
                }
            </Wrapper>  
            )
          }
         else{
            return(<Wrapper>
                <StartContent 
                gotoAdd={this.gotoEdit}
                changeScreen={this.changeScreen}
                />
                </Wrapper>
            )
         }
      }
  }
}


export default Content;
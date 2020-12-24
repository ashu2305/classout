import React from 'react';
import {Wrapper} from './style';
import Calendar from './Calender';
import LiveClass from './AddItem';
import ScheduleMeeting from './ScheduleMeeting';

export default class ScheduleClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAddClass:false,
            isMeetNow:false
        }
    }
    addClass = ()=>{
        this.setState({
            isAddClass:true,
            isMeetNow:false
        })
    }
    addMeeting = ()=>{
        this.setState({
            isMeetNow:true,
            isAddClass:false
        })
    }
    backToCalander = ()=>{
        this.setState({
            isAddClass:false,
            isMeetNow:false
        })
    }
    render(){
        if(this.state.isAddClass){
           return( <LiveClass backToCalander={this.backToCalander}
                    businessType="LIVE_CLASS" />
            )
        }
        else if(this.state.isMeetNow){
            return(
                <ScheduleMeeting backToCalander={this.backToCalander}/>
            )
        }
        else{
            return(
                <Wrapper><Calendar addMeeting={this.addMeeting} addClass={this.addClass}/></Wrapper>
            )
        }
    }
}
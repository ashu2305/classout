import React , {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import { directive } from '@babel/types';
import copy from 'copy-to-clipboard';
import Button from '../../../../components/common/Button';
import './style.css';
class Congratulation extends Component {
    constructor(props){
        super(props);
        this.state= {
            "buttonContent":  this.props.backToCalander?"Back to Calander": "Back to Classes"
        }
    }
    
    copyUrl = () =>{
        var copyText = this.props.linkData.joinUrl
        copy(this.props.linkData.joinUrl);
        //document.execCommand("copy");
    }

    goToMain = () => {
        if(this.props.backToCalander){
        this.props.backToCalander()
        }
        else{
        this.props.changeScreen('START')
        }
    }
    
      
    
    render(){
        return (
            <div className='congrats'>
                <h1>Congratulations</h1>
                <h4> You have successfully created your class</h4>
                <br/>
                <h5>Course Link</h5>
                <input className="linkText" type="text" value={this.props.linkData.joinUrl}  readOnly />
                <Button 
                    onclick={this.copyUrl()} 
                    bType="button"
                    bValue="Copy URL"
                    cName="btn btn-outline-primary"
                />
                <br/>
                <br/><br/>
                <Button
                    bType="button"
                    bValue={this.state.buttonContent}
                    cName="btn btn-primary"
                    clickHandler={()=> {this.goToMain()}}
                />
            </div>
        
        );
    }
}


  
export default Congratulation;
  
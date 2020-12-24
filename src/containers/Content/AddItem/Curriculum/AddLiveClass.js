import React from 'react';
import Button from '../../../../components/common/Button';
import Close from '../../../../assets/images/icons/close-1.svg';
import LiveClassPopup from './liveClassPopup';
class AddLiveClass extends React.Component {
    constructor(props) {
        super(props)
        this.contents=props.data?props.contentData:{
            "active": true,
            "courseType": "",
            "endTimeStamp": "",          
            "selectDays": true,
            "startTimeStamp": "",
            "title": "string",
            "weekDays": [
              
            ]
          }
       
        
    }
    
    render() {
        return (
            <div className="popup-overlay add-quiz">
                <div className="popup">
                    <div className="popup-header">
                        <span className="close-popup" onClick={() => this.props.colsePopup()}>
                            <img src={Close} alt="Close" />
                        </span>
                        <ul>
                            <li>{this.props.name}</li>
                            <li>{this.props.title}</li>
                        </ul>
                        <h2>Add Live class</h2>
                    </div>
                    <div className="popup-body">
                        <div className="d-flex">
                            <div className="content-block">
                                <div className="mb-25">                                   
                                    
                                     <LiveClassPopup 
                                     colsePopup={this.props.colsePopup}
                                     contentData={this.contents}                         
                                     handleLiveClassSave={this.props.handleLiveClassSave}
                                     />                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddLiveClass;
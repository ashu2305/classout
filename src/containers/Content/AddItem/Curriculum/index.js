import React, {Component} from 'react';
import {Wrapper} from './style';
import Button from '../../../../components/common/Button';
import Sections from './Sections';
class Curriculum extends Component{
    constructor(props){
        super(props);
        this.state={
            sections:JSON.parse(JSON.stringify(props.contentData.contents))
        };
        
        this.sections=JSON.parse(JSON.stringify(props.contentData.contents))
    }
    handleContentChange = (data,index)=>{        
        this.sections[index]=data;       
    }
    addNewSection = ()=>{
        let sections = this.state.sections;
        sections.push({            
                title:'', 
                subContents:[]               
            })
        this.sections.push({            
            title:'',
            subContents:[]                
        })
        this.setState({
            sections:sections
        })
    }
    deleteSection = (index)=>{
        let sections = this.state.sections;
        sections.splice(index,1);
        this.sections.splice(index,1);
        this.setState({
            sections:sections
        })
    }
    render(){
        const {sections} = this.state;
        return(
            <Wrapper>
                <h3>Curriculum</h3>
                {
                    sections &&  sections.map((data,index) => {
                        return (
                            <Sections data={data} index={index} 
                            isLive={this.props.contentData.details.liveClass} 
                            deleteSection={this.deleteSection} 
                            handleContentChange={this.handleContentChange} 
                            ></Sections>
                        )
                    })
                }
                <button type="button" 
                className="btn btn-outline-primary" 
                onClick={this.addNewSection} 
                >
                    Add New Section
                </button>

                <div className="button-group">
                        <Button 
                            bType="button"
                            bValue="Next Step"
                            cName="btn btn-primary"
                            clickHandler={()=>{this.props.handleSave('curriculum',this.sections)}}
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
export default Curriculum;
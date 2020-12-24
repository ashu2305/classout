import React, {Component} from 'react';
import ContentType from './contenttype';
import EditIcon from '../../../../assets/images/icons/edit.svg';
import DeleteIcon from '../../../../assets/images/icons/delete.svg';
class Sections extends Component{
    constructor(props){
        super(props);
        this.state={
           title:props.data.title,
           contents:props.data.subContents?props.data.subContents:[],
           showContents:props.data.subContents && props.data.subContents.length?true:false,
           showContentTypes:false,
           isEditTitle:!(props.data.subContents && props.data.subContents.length)
        }
        this.contents=JSON.parse(JSON.stringify(props.data));
    }
    handleContentChange = (data,index)=>{
      this.contents.title=this.state.title;
      this.contents.subContents[index]= data;
      this.props.handleContentChange(this.contents,this.props.index)
    }
    saveSectionTitle = (index,value)=>{
        this.setState({
          showContents:true
        })
    }
    editTitle=()=>{
      this.setState({
        showContents:false,
        contents:JSON.parse(JSON.stringify(this.contents.subContents))
      })
    }
    hangeHandler = (name,value)=>{
        this.setState({
          [name]:value
        })
    }
    selectContentType=()=>{
      this.setState({
        showContentTypes:!this.state.showContentTypes
      })
    }
    addMoreContent = (type)=>{
      let contents=this.state.contents;
      contents.push({
        type:type
      })
      this.contents.subContents.push({
        type:type
      })
      this.setState({
        contents:contents,
        showContentTypes:!this.state.showContentTypes
      })
    }
    render(){
      const {index} =  this.props; 
        return(            
                        <div className="add-new-section" key={index}>
                            <div className="section-title">
                                <span>Section {index+1}</span>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        value={this.state.title}
                                        className="form-control"
                                        placeholder="Add Title"
                                        readOnly={this.state.showContents}
                                        onChange={(e)=>this.hangeHandler('title',e.target.value)}
                                    />
                                    {
                                    !this.state.showContents && 
                                        <span className="save" onClick={()=>this.saveSectionTitle()}>save</span>
                                    }
                                </div>
                                <div className="action-items">
                                    {
                                        
                                        <button type="button">
                                            <img src={EditIcon} alt="edit" onClick={()=> this.editTitle(index)} />
                                        </button>
                                    }
                                    {
                                        index > 0 && 
                                        <button type="button">
                                            <img src={DeleteIcon} alt="delete" onClick={()=> this.props.deleteSection(index)} />
                                        </button>
                                    }
                                </div>
                                
                            </div>
                            {this.state.contents.map((item, i)=>
                                <ContentType 
                                    key={i} 
                                    isLive={this.props.isLive}
                                    data={item}
                                    type={item.type} 
                                    index={i}
                                    isVisible={this.state.showContents}
                                    handleContentChange={this.handleContentChange}
                                    parentIndex={index} />
                            )}
                             {this.state.showContents && 
                                <>
                                <div className="add-more-icon">+</div>
                                <div className="add-more-content-button" onClick={()=> this.selectContentType()}>Add More</div>
                                </>
                            }
                            
                                { this.state.showContentTypes &&
                                <div className="more-content-options">
                                  <div className="content-options" 
                                  onClick={()=>this.addMoreContent('Lecture')}>
                                    Lecture
                                    </div>
                                  <div 
                                  className="content-options"
                                  onClick={()=>this.addMoreContent('Quiz')}
                                  >Quiz</div>
                                  {/* commented due to api <div 
                                  className="content-options"
                                  onClick={()=>this.addMoreContent('Assignment')}
                                  >Assignment</div> */}
                                </div>
                                }
                                
                            
                            
                        </div>
                    )
                }
         
}
export default Sections;
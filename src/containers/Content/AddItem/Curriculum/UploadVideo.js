import React, {Component} from 'react';
import Upload from '../../../../assets/images/icons/upload.svg';
import Close from '../../../../assets/images/icons/close-1.svg';
class UploadVideo extends Component{
    constructor(props){
        super(props);
        this.state={
          activeTab:1,
          searchText:''
        }
        this.addedVideo={
            id:'',
            name:'',
            path:''
        }        
    }
    addVideo = (id,name,path)=>{
        this.addedVideo={
            id:id,
            name:name,
            path:path
        }  
        this.props.addVideoFromLibrary(this.addedVideo)
    }
    handleSearchChange = (e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
    renderResources = ()=>{
        let filteredList= this.props.resources.filter((list) => list.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
        return filteredList.map((elem,index)=>{
              return (
                <tr key={'video-'+elem.id}>
                <td>{elem.name}</td>
                <td>Video</td>
                <td>24/Jan/2020</td>
                <td onClick={()=>this.addVideo(elem.id,elem.name,elem.path)}><span>Add</span></td>
            </tr>
              )
        })
    }
    render(){
      return(
        <div className="popup-overlay add-video">
        <div className="popup">
            <div className="popup-header">
                <span className="close-popup" onClick={()=>this.props.colsePopup()}>
                    <img src={Close} alt="Close" />
                </span>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.title}</li>
                </ul>
                <h2>Add Video</h2>
            </div>
            <div className="popup-body">
                <div className="d-flex">
                    <div className="side-nav">
                        <ul>
                            <li className={this.state.activeTab == '1' ? 'active' : ''} onClick={()=>this.setState({activeTab:1})}>Add from Computer</li>
                            <li className={this.state.activeTab == '2' ? 'active' : ''} onClick={()=>this.setState({activeTab:2})}>Add from Library</li>
                        </ul>
                    </div>
                    <div className="content-block">
                        {
                            this.state.activeTab == '1' && 
                            <div className="video-upload">
                                <div className="imgb"> 
                                    <img src={Upload} alt="Upload" />
                                </div>
                                <h3>Upload PDF File From Computer</h3>
                                <p> All files should be at least 720p and less than 4.0 GB</p>
                                <div className="upload-file">
                                    <span>Select file</span>
                                    <input type="file" onChange={(e)=>this.props.uploadFile(e)}/>
                                </div>
                            </div>
                        }
                        {
                            this.state.activeTab == '2' && 
                            <div className="video-library">
                                <div className="d-flex justify-content-between">
                                    <span>Library</span>
                                    <input type="text" value={this.state.searchText} 
                                    onChange={this.handleSearchChange} 
                                    className="search-content" />
                                </div>
                                <div className="table-library">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>File Name</th>
                                                <th>File Type</th>
                                                <th>Date Uploaded</th>
                                                <th style={{minWidth:'100px'}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderResources()}                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }    
}

  
  export default UploadVideo;
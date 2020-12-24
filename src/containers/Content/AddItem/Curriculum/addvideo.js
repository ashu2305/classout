import React, {useState} from 'react';
import Upload from '../../../../assets/images/icons/upload.svg';
import Close from '../../../../assets/images/icons/close-1.svg';

const AddVideo = ({
    addVideo,
    setAddVideo
}) => {
    const [activeTab, setActiveTab] = useState('1');
    return(
        <div className="popup-overlay add-video">
        <div className="popup">
            <div className="popup-header">
                <span className="close-popup" onClick={()=>setAddVideo(!addVideo)}>
                    <img src={Close} alt="Close" />
                </span>
                <ul>
                    <li>Lecture 2</li>
                    <li>Introduction of Layers</li>
                </ul>
                <h2>Add Video</h2>
            </div>
            <div className="popup-body">
                <div className="d-flex">
                    <div className="side-nav">
                        <ul>
                            <li className={activeTab == '1' ? 'active' : ''} onClick={()=>setActiveTab('1')}>Add from Computer</li>
                            <li className={activeTab == '2' ? 'active' : ''} onClick={()=>setActiveTab('2')}>Add from Library</li>
                        </ul>
                    </div>
                    <div className="content-block">
                        {
                            activeTab == '1' && 
                            <div className="video-upload">
                                <div className="imgb"> 
                                    <img src={Upload} alt="Upload" />
                                </div>
                                <h3>Upload PDF File From Computer</h3>
                                <p> All files should be at least 720p and less than 4.0 GB</p>
                                <div className="upload-file">
                                    <span>Select file</span>
                                    <input type="file" />
                                </div>
                            </div>
                        }
                        {
                            activeTab == '2' && 
                            <div className="video-library">
                                <div className="d-flex justify-content-between">
                                    <span>Library</span>
                                    <input type="text" className="search-content" />
                                </div>
                                <div className="table-library">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>File Name</th>
                                                <th>File Type</th>
                                                <th>Date Uploaded</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>illustrator_class1</td>
                                                <td>Video</td>
                                                <td>24/Jan/2020</td>
                                                <td><span>Add</span></td>
                                            </tr>
                                            <tr>
                                                <td>illustrator_class1</td>
                                                <td>Video</td>
                                                <td>24/Jan/2020</td>
                                                <td><span>Add</span></td>
                                            </tr>
                                            <tr>
                                                <td>illustrator_class1</td>
                                                <td>Video</td>
                                                <td>24/Jan/2020</td>
                                                <td><span>Add</span></td>
                                            </tr>
                                            <tr>
                                                <td>illustrator_class1</td>
                                                <td>Video</td>
                                                <td>24/Jan/2020</td>
                                                <td><span>Add</span></td>
                                            </tr>
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

export default AddVideo;
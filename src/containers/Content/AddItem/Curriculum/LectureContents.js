import React, { Component } from 'react';
import UploadVideo from './UploadVideo';
import AddArticle from './AddArticle';
import UploadPresentation from './UploadPresentation';
import AddQuiz from './addquiz';
import AddLiveClass from './AddLiveClass';
import VdeoIcon from '../../../../assets/images/icons/video.svg';
import ArticleIcon from '../../../../assets/images/icons/article.svg';
import PresentationIcon from '../../../../assets/images/icons/presentation.svg';
import LiveClass from '../../../../assets/images/icons/liveclass.svg';
import dragIcon from '../../../../assets/images/icons/drag.svg';
import presentationImg from '../../../../assets/images/presentation_2x.png';
import quizImage from '../../../../assets/images/objective_2x.png';
import articleImg from '../../../../assets/images/article_img.jpg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  uploadFile,
  getResources
} from '../../APIs/action';
import Button from '../../../../components/common/Button';
class ContentType extends Component {
  constructor(props) {
    super(props)
    this.state = {     
      description: props.data.description,
      contentMedia: props.data.contentMedia,
      showUploadWindow: false,
      uploadType: '',
      isFileUploadProgress: false,
      uploadProgress: 0,
      progressUrl: '',
      filePath: this.getFilePath(props.data),
      fileName: '',
      articleData: props.data.article && props.data.article.htmlContent ? props.data.article.htmlContent : ''
    }
    this.resources = [];
    this.contentData = {
      "active": true,
      "assetType": props.data.assetType,
      "contentMedia": props.data.contentMedia,
      "description": props.data.description,
      "duration": "2020-08-09T09:52:31.221Z",
      "itemNumber": 0,
      "article": props.data.article,
      "presentation": props.data.presentation,
      "quiz": props.data.quiz,
      "video": props.data.video,
      "resources": [],
      "title": "string",
      "type": props.data.type ? props.data.type : 'LECTURE'

    }
  }
  getFilePath = (data) => {
    if (data.assetType === 'VIDEO') {
      return data.video && data.video.resource ? data.video.resource['path'] : ''
    }
    else if (data.assetType === 'PRESENTATION') {
      return data.presentation && data.presentation.resource ? presentationImg : ''
    }
    else if (data.assetType === 'LIVECLASS') {
      return data.liveClass && data.liveClass.resource ? data.liveClass.resource['path'] : ''
    }
    else if (data.assetType === 'ARTICLE') {
      return data.article ? articleImg : ''
    }
    else {
      return ''
    }
  }
  componentDidMount() {
    this.props.getResources((data) => {
      this.resources = data;
      console.log('resources---', this.resources)
    })
  }
  changeHandler = (name, value) => {
    this.setState({
      [name]: value,
    }, () => {
      this.props.changeHandler(name,value)
    })

  }
  uploadResource = (name, value) => {
    this.changeHandler(name, value)
    this.setState({
      showUploadWindow: true,
      uploadType: value,
      contentMedia: value
    })
    this.contentData.contentMedia = value;
    this.contentData.assetType = value
  }
  colsePopup = () => {
    this.setState({
      showUploadWindow: true,
      uploadType: ''
    })
  }

  /***
   * Code to get first frame of uploaded video
   */
  getVideoImage = (path, secs, callback) => {
    var me = this, video = document.createElement('video');
    video.onloadedmetadata = function () {
      if ('function' === typeof secs) {
        secs = secs(this.duration);
      }
      this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
    };
    video.onseeked = function (e) {
      var canvas = document.createElement('canvas');
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      var img = new Image();
      img.src = canvas.toDataURL();
      callback.call(me, img, this.currentTime, e);
    };
    video.onerror = function (e) {
      callback.call(me, undefined, undefined, e);
    };
    video.src = path;
  }
  uploadPresentationFile = (e) => {
    let file = e.target.files[0];
    this.props.uploadFile(e.target.files, (type, percentCompleted) => {
      if (type === 'progress') {
        this.setState({
          showUploadWindow: false,
          isFileUploadProgress: type === 'progress' ? true : false,
          uploadProgress: percentCompleted
        })
      }
      else {
        this.contentData.presentation = {}
        this.contentData.assetType = 'PRESENTATION';
        this.contentData.presentation.resource = {};
        this.contentData.presentation.resource['id'] = percentCompleted.data.id;
        this.contentData.presentation.resource['path'] = percentCompleted.data.path
        this.contentData.presentation.name = file.name;
        this.setState({
          showUploadWindow: false,
          isFileUploadProgress: false,
          uploadProgress: 0,
          fileName: file.name,
          filePath: percentCompleted.data.path
        })
        this.props.handleContentChange(this.contentData, this.props.index);
      }

      this.setState({
        showUploadWindow: false,
        isFileUploadProgress: type === 'progress' ? true : false,
        uploadProgress: percentCompleted
      })
    })
  }
  uploadFile = (e) => {
    let file = e.target.files[0]
    this.getVideoImage(URL.createObjectURL(file), 1, (img) => {
      this.setState({
        progressUrl: img.src,
        uploadFileName: file.name
      })
    })
    this.props.uploadFile(e.target.files, (type, percentCompleted) => {
      if (type === 'progress') {
        this.setState({
          showUploadWindow: false,
          isFileUploadProgress: type === 'progress' ? true : false,
          uploadProgress: percentCompleted
        })
      }
      else {
        if (this.state.contentMedia === 'VIDEO') {
          this.contentData.video = {}
          this.contentData.assetType = 'VIDEO';
          this.contentData.video.resource = {};
          this.contentData.video.resource['id'] = percentCompleted.data.id;
          this.contentData.video.resource['path'] = percentCompleted.data.path
          this.contentData.video.name = file.name;
        }
        this.setState({
          showUploadWindow: false,
          isFileUploadProgress: false,
          uploadProgress: 0,
          fileName: file.name,
          filePath: percentCompleted.data.path
        })
        this.props.handleContentChange(this.contentData, this.props.index);
      }
    })
  }
  addVideoFromLibrary = (obj) => {
    this.contentData.video = {}
    this.contentData.assetType = 'VIDEO';
    this.contentData.video.resource = {};
    this.contentData.video.resource['id'] = obj.id;
    this.contentData.video.resource['path'] = obj.path
    this.contentData.video.name = obj.name;
    this.setState({
      showUploadWindow: false,
      isFileUploadProgress: false,
      uploadProgress: 0,
      fileName: obj.name,
      filePath: obj.path,
      progressUrl: obj.path
    })
    this.props.handleContentChange(this.contentData, this.props.index);
  }
  addPresentationFromLibrary = (obj) => {
    this.contentData.presentation = {}
    this.contentData.assetType = 'PRESENTATION';
    this.contentData.presentation.resource = {};
    this.contentData.presentation.resource['id'] = obj.id;
    this.contentData.presentation.resource['path'] = obj.path
    this.contentData.presentation.name = obj.name;
    this.setState({
      showUploadWindow: false,
      isFileUploadProgress: false,
      uploadProgress: 0,
      fileName: obj.name,
      filePath: obj.path
    })
    this.props.handleContentChange(this.contentData, this.props.index);
  }
  handleArticleSave = (editorData) => {
    this.setState({
      showUploadWindow: false,
      isFileUploadProgress: false,
      articleData: editorData
    })
    this.contentData['article'] = {};
    this.contentData['article']['htmlContent'] = editorData;
  }
  handleLiveClassSave = (liveClassData) => {

  }
  showUploadContentList = () => {
    
      return (
        <>
          <label>Select Content Type</label>
          <ul className="d-flex justify-content-between">
            <li className="box-1" onClick={() => this.uploadResource('contentMedia', 'VIDEO')}>
              <img src={VdeoIcon} alt="Video" />
              <span>Video</span>
            </li>
            <li className="box-2" onClick={() => this.uploadResource('contentMedia', 'ARTICLE')}>
              <img src={ArticleIcon} alt="Article" />
              <span>Article</span>
            </li>
            <li className="box-3" onClick={() => this.uploadResource('contentMedia', 'PRESENTATION')}>
              <img src={PresentationIcon} alt="presentation" />
              <span>Presentation</span>
            </li>
            {
              this.props.isLive &&
              <li className="box-4" onClick={() => this.uploadResource('contentMedia', 'LIVECLASS')}>
                <img src={LiveClass} alt="live class" />
                <span>Live Class</span>
              </li>
            }

          </ul>
        </>
      )
  }
  showUplaodedFile = () => {
    if (this.state.contentMedia === 'VIDEO') {
      return (
        <>
          <img src={this.state.filePath} width={145} height={86} alt="upload progress"></img>
          <div className="progress-container">
            <div className="upload-file-name">
              {this.state.fileName}
            </div>
            <div className="file-preview" onClick={() => this.uploadResource('contentMedia', 'VIDEO')}>Change</div>
          </div>
        </>
      )
    }
    else if (this.state.contentMedia === 'PRESENTATION') {
      return (
        <>
          <img src={presentationImg} width={145} height={86} alt="upload completed"></img>
          <div className="progress-container">
            <div className="upload-file-name">
              {this.state.fileName}
            </div>
            <div className="file-preview" onClick={() => this.uploadResource('contentMedia', 'PRESENTATION')}>Change</div>
          </div>
        </>
      )
    }
    else if (this.state.contentMedia === 'ARTICLE') {
      return (
        <>
          <img src={articleImg} width={145} height={86} alt="upload completed"></img>
          <div className="progress-container">
            <div className="upload-file-name">
              {this.state.fileName}
            </div>
            <div className="file-preview" onClick={() => this.uploadResource('contentMedia', 'ARTICLE')}>Update</div>
          </div>
        </>
      )
    }
  }

  render() {
    return (
      <>
        {this.state.isFileUploadProgress ?
          <div className="upload-progress">
            <label>Select Content Type</label>
            <img src={this.state.progressUrl} width={145} height={86} alt="upload progress"></img>
            <div className="progress-container">
              <div className="upload-file-name">
                {this.state.uploadFileName}
              </div>
              <div className="progress-base">
                <div style={{ width: this.state.uploadProgress + "%" }} className="progress-seek"></div>
              </div>

            </div>
          </div>
          :
          <>
            {
              this.state.filePath ?
                this.showUplaodedFile() :
                this.showUploadContentList()
            }
          </>
        }
        {
                        this.state.showUploadWindow && this.state.uploadType === 'VIDEO' &&
                        <div className="uplaod-video-popup">
                            <UploadVideo
                                colsePopup={this.colsePopup}
                                title={this.props.title}
                                uploadFile={this.uploadFile}
                                addVideoFromLibrary={this.addVideoFromLibrary}
                                resources={this.resources}
                                name={'Lecture ' + Number(this.props.index + 1)} />
                        </div>
                    }
                    {
                        this.state.showUploadWindow && this.state.uploadType === 'ARTICLE' &&
                        <div className="uplaod-video-popup">
                            <AddArticle
                                handleArticleSave={this.handleArticleSave}
                                colsePopup={this.colsePopup}
                                title={this.props.title}
                                name={'Lecture ' + Number(this.props.index + 1)} />
                        </div>
                    }
                    {
                        this.state.showUploadWindow && this.state.uploadType === 'PRESENTATION' &&
                        <div className="uplaod-video-popup">
                            <UploadPresentation
                                uploadPresentation={this.uploadPresentationFile}
                                colsePopup={this.colsePopup}
                                addPresentationFromLibrary={this.addPresentationFromLibrary}
                                resources={this.resources}
                                title={this.props.title}
                                name={'Lecture ' + Number(this.props.index + 1)} />
                        </div>
                    }
                    {
                        this.state.showUploadWindow && this.state.uploadType==='LIVECLASS' &&
                        <div className="uplaod-video-popup">
                            <AddLiveClass
                                handleLiveClassSave={this.handleLiveClassSave}
                                colsePopup={this.colsePopup}
                                title={this.props.title}
                                name={'Lecture ' + Number(this.props.index + 1)} />
                        </div>
                    }
      </>

    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      uploadFile,
      getResources
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentType);

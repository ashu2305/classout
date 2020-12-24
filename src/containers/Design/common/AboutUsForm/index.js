import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "react-datepicker/dist/react-datepicker.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../../../../components/common/Button';
import {
	getBanner,
	uploadFile
} from '../../../Content/APIs/action';
class AboutUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData:{
        description: props.data.text?props.data.text:'',
        image: {
          path: props.data.image && props.data.image.path?props.data.image.path:'',
          id: props.data.image  && props.data.image.id?props.data.image.id:'',
        }
      },
      isUploading:false     
    }

  }
  changeHandler = (value, name) => {
    let formData=this.state.formData;
    formData.description=value;
    this.setState({
      formData: formData
    })
  }
  uploadFile = (e) => {
    this.props.uploadFile(e.target.files, (type, percentCompleted) => {
      if (type === 'progress') {
        this.setState({
          isUploading: true
        })
      }
      else {
        this.setState({
          isUploading: false
        })
        let formData = this.state.formData;
        formData['image']['path'] = percentCompleted.data.path;
        formData['image']['id'] = percentCompleted.data.id;
        this.setState({
          formData: formData
        })

      }
    });
  }
  render() {
    const { formData } = this.state
    return (
      <>
       <div className="field-group">          
          <div className="design-add-image">
          <label>Add Image</label>
          <div className="change-image">
            {
              this.state.isUploading &&
              <span>Uploading..</span>
            }
            {
              formData.image.path &&

              <img src={formData.image.path} alt="course cover" />
            }
            <div className="upload-file">
              <span>
                {formData.image.path ? <>Change file</> : <>Select File</>}
              </span>
              <input type="file" onChange={(e) => this.uploadFile(e)} />
            </div>
          </div>
        </div>
        </div>
        <div className="field-group">
          <label>Description </label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={editor => {
              this.ckEditor = editor;
              // You can store the "editor" and use when it is needed.
              editor.setData(formData.description);
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {

              const data = editor.getData();
              let divElem = document.createElement('div');
              divElem.innerHTML = data;
              this.changeHandler(data, 'description')
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div>        
        <Button 
					bType="button"
					bValue="Save"
					cName="btn btn-blue btn-block btn-space-t-20"				
					clickHandler={()=>{this.props.saveAboutUs(this.state.formData,this.props.selectedFormIndex,this.props.data.id)}}
				/>
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
			getBanner,
			uploadFile,
		}, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AboutUsForm);

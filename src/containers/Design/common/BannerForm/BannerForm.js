
import React from 'react';
import Select from 'react-select';
export default class BannerForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.data)
    this.state = {
      show: props.data.title ? false : true,
      formData: {
        ...props.data
      }
    }
  }
  showForm = () => {
    this.setState({
      show: !this.state.show,
      isUploading: false
    })
  }
  saveBanner = (name, value) => {
    let formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData: formData
    })
  }
  render() {
    const { formData } = this.state
    return (
      <div className={`design-accordion ${this.state.show ? 'show' : ''}`}>
        <div className="design-accordion-title">
          <span className="accordion-handle">
            <i className="fa fa-bars"></i>
          </span>
          <label>{formData.title}</label>
          <span className="accordion-arrow" onClick={this.showForm}>
            <i className="fa fa-chevron-down"></i>
          </span>
        </div>
        <div className="design-accordion-body">
          {this.renderForm()}
        </div>
      </div>

    )
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
  getOptions = (item) => {		
		return item.map(elem => {
			return { label: elem, value: elem }
		})
	}
  renderForm = () => {
    const { formData } = this.state
    return (
      <>
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
        <div className="design-form">
          <form>
            <div className="form-group">
              <label className="field-label">Title</label>
              <input
                value={formData.title}
                onChange={(e) => this.saveBanner('title', e.target.value)}
                type="text"
                className="form-control form-control-sm"
              />
            </div>
            <div className="form-group">
              <label className="field-label">Description</label>
              <input
                value={formData.description}
                onChange={(e) => this.saveBanner('description', e.target.value)}
                type="text"
                className="form-control form-control-sm" />
            </div>
            <div className="form-group">
              <label className="field-label">Link on</label>
              <Select
							options={this.getOptions(this.props.linkTo)}
							isClearable={true}
							classNamePrefix="select-menu"
							className="select-menu"
              onChange={(e) => { this.saveBanner('linkOn', e.value ) }}
						/>
              
            </div> 
            <div className="form-group">
              <label className="field-label">Button Name</label>
              <input
                type="text"
                value={formData.buttonName}
                onChange={(e) => { this.saveBanner('buttonName', e.target.value) }}
                className="form-control form-control-sm" />
            </div>
            <div className="form-group">
              <label className="field-label">Link Destination</label>
              <Select
							options={this.getOptions(this.props.linkDest)}
							isClearable={true}
							classNamePrefix="select-menu"
							className="select-menu"
              onChange={(e) => { this.saveBanner('linkDest', e.value ) }}
						/>
            </div>
            <div className="form-group">
              <label className="field-label">Add Content</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="form-btn">
              <button type="button"
                onClick={() => {
                  this.props.saveBanner(this.state.formData, this.props.index)
                }}
                className="btn btn-blue">
                Save
										</button>
              <button type="submit" className="btn btn-light">
                <i className="fa fa-trash-alt"></i> Delete
										</button>
            </div>
          </form>
        </div>

      </>
    )
  }
}
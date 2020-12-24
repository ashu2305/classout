import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getLanguage,
    getLevels,
    getCategories,
    getSubCategories,
    uploadFile
} from '../../APIs/action';
import Button from '../../../../components/common/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from './style';

class Schedule extends Component {
    constructor(props) {
        super(props);
        let dates = this.convertDate(props.contentData.liveClassContent['weekDays'])
        this.state = {
            formData: {
                title: props.contentData.details.title,
                description: props.contentData.details.description,
                image: props.contentData.details['courseImage'] ? props.contentData.details['courseImage']['path'] : '',
                imageId: props.contentData.details['courseImage'] ? props.contentData.details['courseImage']['id'] : '',
                language : props.contentData.details['language']? props.contentData.details['language']['id']: null,
                level: props.contentData.details['level']? props.contentData.details['level']['id']: null,
                category: props.contentData.details['category']?props.contentData.details['category']['id']:null,
                subCategory: props.contentData.details['subCategory']? props.contentData.details['subCategory']['id']:null,
                daily: props.contentData.liveClassContent['weekDays'].length === 7,
                dates: dates,
                fullCourse: props.contentData.liveClassContent['courseType'] === 'FULL_COURSE',
                startTimeStamp: props.contentData.liveClassContent['startTimeStamp'] ? new Date(props.contentData.liveClassContent['startTimeStamp']) : new Date(),
                endTimeStamp: props.contentData.liveClassContent['endTimeStamp'] ? new Date(props.contentData.liveClassContent['endTimeStamp']) : new Date(),
                startDate: props.contentData.liveClassContent['startDate'] ? new Date(props.contentData.liveClassContent['startDate']) : new Date(),
                endDate: props.contentData.liveClassContent['endDate'] ? new Date(props.contentData.liveClassContent['endDate']) : new Date(),
                prerequisites: props.contentData.details['prerequisites']
            },
            languages: [],
            levels: [],
            categories: [],
            subCategories: []
        }
        this.ckEditor = {};

    }

    convertDate = (weekDays) => {
        let dates = {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false
        };
        weekDays.forEach(item => {
            switch (item.id) {
                case 1:
                    dates['mon'] = true;
                    break;
                case 2:
                    dates['tue'] = true;
                    break;
                case 3:
                    dates['wed'] = true;
                    break;
                case 4:
                    dates['thu'] = true;
                    break;
                case 5:
                    dates['fri'] = true;
                    break;
                case 6:
                    dates['sat'] = true;
                    break;
                case 7:
                    dates['sun'] = true;
                    break;
                default:
                    break;

            }
        })
        return dates;
    }


    componentWillReceiveProps(nextProps) {
        let dates = this.convertDate(nextProps.contentData.liveClassContent['weekDays'])
        let formData = this.state.formData;
        formData = {
            title: nextProps.contentData.details.title,
            description: nextProps.contentData.details.description,
            image: nextProps.contentData.details['courseImage'] ? nextProps.contentData.details['courseImage']['path'] : '',
            imageId: nextProps.contentData.details['courseImage'] ? nextProps.contentData.details['courseImage']['id'] : '',
            language : nextProps.contentData.details['language']? nextProps.contentData.details['language']['id']: null,
            level: nextProps.contentData.details['level']? nextProps.contentData.details['level']['id']: null,
            category: nextProps.contentData.details['category']?nextProps.contentData.details['category']['id']:null,
            subCategory: nextProps.contentData.details['subCategory']? nextProps.contentData.details['subCategory']['id']:null,
            daily: nextProps.contentData.liveClassContent['weekDays'].length === 7,
            dates: dates,
            fullCourse: nextProps.contentData.liveClassContent['courseType'] === 'FULL_COURSE',
            startTimeStamp: nextProps.contentData.liveClassContent['startTimeStamp'] ? new Date(nextProps.contentData.liveClassContent['startTimeStamp']) : new Date(),
            endTimeStamp: nextProps.contentData.liveClassContent['endTimeStamp'] ? new Date(nextProps.contentData.liveClassContent['endTimeStamp']) : new Date(),
            startDate: nextProps.contentData.liveClassContent['startDate'] ? new Date(nextProps.contentData.liveClassContent['startDate']) : new Date(),
            endDate: nextProps.contentData.liveClassContent['endDate'] ? new Date(nextProps.contentData.liveClassContent['endDate']) : new Date(),
            prerequisites: nextProps.contentData.details['prerequisites']
        }

        this.setState({
            formData: formData
        }, () => {
            this.ckEditor.setData && this.ckEditor.setData(nextProps.contentData.description);
        })
        //  
    }

    componentDidMount() {

    }


    changeHandler = (value, name) => {
        let formData = this.state.formData
        formData[name] = value;
        this.setState({
            formData: formData
        })
    }

    handleDayChange = (name, value) => {
        let formData = this.state.formData;
        formData.dates[name] = value;
        this.setState({
            formData: formData
        })
    }
    render() {
        console.log('mmm', this.state.formData.fullCourse)
        return (
            <Wrapper>
                <h3>Schedule Class</h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="field-group radio-group">
                            <div className="row">
                                <div className="col-md-12 catagories-dropdowns">
                                    <div className="field-group">
                                        <label>Class Type <span>*</span></label>
                                    </div>    
                                </div>
                                <div className="col-md-6 catagories-dropdowns">
                                    <span className="boxed-radio ">
                                        <input
                                            type="radio"
                                            id="courseType1"
                                            name="radio-group"
                                            value="no"
                                            readOnly
                                            className={!this.state.formData.fullCourse ? 'checked' : 'not-checked'}
                                            checked={!this.state.formData.fullCourse}
                                        />
                                        <label onClick={(e) => {
                                            this.changeHandler(false, 'fullCourse')
                                        }} htmlFor="courseType1">
                                            <div className="radio-label">One Time Class</div>
                                            <div className="radio-desc">One Time session on a particular topic.</div>
                                        </label>

                                    </span>
                                </div>
                                <div className="col-md-6 catagories-dropdowns">
                                    <span className="boxed-radio right">
                                        <input
                                            type="radio"
                                            id="courseType2"
                                            name="radio-group"
                                            value="yes"
                                            readOnly
                                            className={this.state.formData.fullCourse ? 'checked' : 'not-checked'}
                                            checked={this.state.formData.fullCourse}
                                        />
                                        <label onClick={(e) => {
                                            this.changeHandler(true, 'fullCourse')
                                        }} htmlFor="courseType2">
                                            <div className="radio-label">Recurring Classes</div>
                                            <div className="radio-desc">Multiple session course with fix start & end date.</div>
                                        </label>

                                    </span>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group date-group">
                                    <label>Start Date <span>*</span></label>
                                    <DatePicker
                                        showPopperArrow={false}
                                        selected={this.state.formData.startDate}
                                        placeholder="Start Date"
                                        className="form-control"
                                        onChange={(date) => {
                                            this.changeHandler(new Date(date).getTime(), 'startDate')
                                        }
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group date-group">
                                    <label>End Date <span>*</span></label>
                                    <DatePicker
                                        showPopperArrow={false}
                                        selected={this.state.formData.endDate}
                                        placeholder="End Date"
                                        className="form-control"
                                        onChange={(date) => {
                                            this.changeHandler(new Date(date).getTime(), 'endDate')
                                        }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group select-group">
                                    <label>Start Time <span>*</span></label>
                                    <DatePicker
                                        showPopperArrow={false}
                                        className="form-control"
                                        selected={this.state.formData.startTimeStamp}
                                        onChange={date => this.changeHandler(date, 'startTimeStamp')}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 catagories-dropdowns">
                                <div className="field-group select-group">
                                    <label>End Time <span>*</span></label>
                                    <DatePicker
                                        showPopperArrow={false}
                                        className="form-control"
                                        selected={this.state.formData.endTimeStamp}
                                        onChange={date => this.changeHandler(date, 'endTimeStamp')}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {this.state.formData.fullCourse &&
                        <>
                            <div className="field-group radio-group">
                                <span>
                                    <input
                                        type="radio"
                                        id="test1"
                                        name="radio-group"
                                        value="yes"
                                        readOnly
                                        className={this.state.formData.daily ? 'checked' : 'not-checked'}
                                        defaultChecked={this.state.formData.daily}
                                    />
                                    <label onClick={(e) => {
                                        this.changeHandler(true, 'daily')
                                    }} htmlFor="test1">Daily</label>
                                </span>
                                <span>
                                    <input
                                        value="no"
                                        type="radio" id="test2"
                                        readOnly
                                        className={!this.state.formData.daily ? 'checked' : 'not-checked'}
                                        defaultChecked={!this.state.formData.daily}
                                        name="radio-group" />
                                    <label onClick={(e) => {
                                        this.changeHandler(false, 'daily')
                                    }}
                                        htmlFor="test2">Select Days</label>
                                </span>
                            </div>
                           
                        {
                            !this.state.formData.daily &&
                            <>
                                <div className="row field-group">
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="Mon"
                                            type="checkbox"
                                            id="checkBox1"
                                            checked={this.state.formData.dates.mon}
                                            onChange={(e) => {
                                                this.handleDayChange('mon', e.target.checked)
                                            }}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox1">
                                            Mon
                                    </label>
                                    </div>
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="tue"
                                            type="checkbox" id="checkBox2"
                                            onChange={(e) => {
                                                this.handleDayChange('tue', e.target.checked)
                                            }}
                                            checked={this.state.formData.dates.tue}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox2">Tue</label>
                                    </div>
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="wed"
                                            type="checkbox"
                                            id="checkBox3"
                                            onChange={(e) => {
                                                this.handleDayChange('wed', e.target.checked)
                                            }}
                                            checked={this.state.formData.dates.wed}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox3">Wed</label>
                                    </div>
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="thu"
                                            type="checkbox"
                                            id="checkBox4"
                                            onChange={(e) => {
                                                this.handleDayChange('thu', e.target.checked)
                                            }}
                                            checked={this.state.formData.dates.thu}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox4">Thu</label>
                                    </div>
                                </div>
                                <div className="row field-group">
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="Fri"
                                            type="checkbox"
                                            id="checkBox5"
                                            onChange={(e) => {
                                                this.handleDayChange('fri', e.target.checked)
                                            }}
                                            checked={this.state.formData.dates.fri}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox5">Fri</label>
                                    </div>
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="Sat"
                                            type="checkbox" id="checkBox6"
                                            onChange={(e) => {
                                                this.handleDayChange('sat', e.target.checked)
                                            }}
                                            checked={this.state.formData.dates.sat}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox6">Sat</label>
                                    </div>
                                    <div className="col-md-3 catagories-dropdowns">
                                        <input
                                            value="Sun"
                                            type="checkbox" id="checkBox7"
                                            onChange={(e) => {
                                                this.handleDayChange('sun', e.target.checked)
                                            }}
                                            checked={this.state.formData.dates.sun}
                                            name="checkbox-group" />
                                        <label htmlFor="checkBox7">Sun</label>
                                    </div>
                                </div>
                            </>
                        }</>}
                    </div>
                      
                    <div className="col-md-4">
                        <div className="field-group">
                            <div className="upload-container shadow-container">
                                <img src={this.props.contentData.details['courseImage'] && this.props.contentData.details['courseImage']['path']} alt="Schedule" />
                                <div className="schedule-img-head">
                                    A beginner’s guide to learning yoga
                                </div>
                                {/* <div className="schedule-img-head-2">
                                    <div className="img-head-left">
                                        <div className="schedule-key">
                                            Language
                                        </div>
                                        <div className="schedule-value">
                                            {this.props.language}
                                        </div>
                                    </div>
                                    <div className="img-head-right">
                                        <div className="schedule-key">
                                            Level
                                        </div>
                                        <div className="schedule-value">
                                            {this.props.level}
                                        </div>
                                    </div>
                                </div> */}
                                <div dangerouslySetInnerHTML={{ __html: this.props.contentData.details.description }} className="schedule-img-desc">

                                </div>
                                {/* <div className="schedule-img-desc">
                                    <div className="pre-head">Prerequisites</div>
                                    {this.props.contentData.prerequisites.map(item => {
                                        return item.name + ', '
                                    })}
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="button-group" style={{ borderTop: 'none' }}>
                    <Button
                        bType="button"
                        bValue="Next Step"
                        cName="btn btn-primary"
                        clickHandler={() => {
                            this.props.handleSave('liveclass', this.state.formData)
                        }}
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

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            getLanguage,
            getLevels,
            getCategories,
            getSubCategories,
            uploadFile
        }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../../../../../components/common/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from './style';

class Schedule extends Component {
    constructor(props) {
        super(props);
        let dates = this.convertDate(props.contentData['weekDays'])
        this.state = {
            formData: {
                
                daily: props.contentData['weekDays'].length === 7,
                dates: dates,
                fullCourse: props.contentData['courseType'] === 'FULL_COURSE',
                startTimeStamp: props.contentData['startTimeStamp'] ? new Date(props.contentData['startTimeStamp']) : new Date(),
                endTimeStamp: props.contentData['endTimeStamp'] ? new Date(props.contentData['endTimeStamp']) : new Date(),
                startDate: props.contentData['startDate'] ? new Date(props.contentData['startDate']) : new Date(),
                endDate: props.contentData['endDate'] ? new Date(props.contentData['endDate']) : new Date(),
                
            }
            
        }
        

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
                
                <div className="row">
                    <div className="col-md-8">
                        <div className="field-group radio-group">
                            <label>Course Type <span>*</span></label>
                            <span className="boxed-radio">
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
                        <div className="row">
                            <div className="col-md-6">
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
                            <div className="col-md-6">
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
                            <div className="col-md-6">
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
                            <div className="col-md-6">
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
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
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
                      
                     </div>
                <div className="button-group" style={{ borderTop: 'none' }}>
                    <Button
                        bType="button"
                        bValue="Save"
                        cName="btn btn-primary"
                        clickHandler={() => {
                            
                            this.props.handleLiveClassSave(this.state.formData)
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
            
        }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
import React from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../../../../components/common/Button';
import { Wrapper } from './style';
import {
    getCurrencies
} from '../../APIs/action';
class Pricing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            formData: {
                currency: props.contentData['currency'] ?props.contentData['currency']['id']:'',
                listPriceMonthly: props.contentData.listPriceMonthly,
                listPriceOneTime: props.contentData.listPriceOneTime,
                classType: props.contentData.classType !== 'FREE' ? true : false
            }

        }
    }
    componentDidMount() {
        this.props.getCurrencies((data) => {
            this.setState({
                currencies: data
            })
        })
    }
    changeHandler = (value, name) => {
        let formData = this.state.formData
        formData[name] = value;
        this.setState({
            formData: formData
        })
    }
    getOptions = (item) => {
        return item.map(elem => {
            return { label: elem.name, value: elem.id }
        })
    }
    getDefault = (items, id) => {
        let defalutObj = { label: '', value: '' }
        items.forEach(elem => {
            if (id === elem.id) {
                defalutObj = { label: elem.name, value: elem.id }
            }
        })
        return defalutObj;
    }
    
    handleSave = () => {
        const{classType , listPriceOneTime, currency}  = this.state.formData;
        let error = '';
        if(!classType){
            this.props.handleSave('price', this.state.formData);
        }
        else{
            console.log(currency);
            if(currency === undefined  || currency==='' ){
                error = "Please fill currency. ";
            }
        }
        if(error === ''){
            this.props.handleSave('price',this.state.formData);
        }else{
            window.alert(error);
        }
    }
    render() {
        console.log(this.state.formData.currency);
        return (
            <Wrapper>
                <h3>Pricing</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="field-group radio-group">
                            <label>Class Type <span>*</span></label>
                            <span>
                                <input
                                    type="radio"
                                    id="Paid"
                                    name="radio-group"
                                    checked={this.state.formData.classType}
                                />
                                <label onClick={(e) => {
                                    this.changeHandler(true, 'classType')
                                }} htmlFor="Paid">Paid</label>
                            </span>
                            <span>
                                <input checked={!this.state.formData.classType} type="radio" id="Free" name="radio-group" />
                                <label onClick={(e) => {
                                    this.changeHandler(false, 'classType')
                                }} htmlFor="Free">Free</label>
                            </span>
                        </div>
                        {this.state.formData.classType &&
                            <>
                                <div className="field-group select-group">
                                    <label>Currency <span>*</span></label>
                                    <Select
                                        options={this.getOptions(this.state.currencies)}
                                        value={this.getDefault(this.state.currencies, this.state.formData.currency)}
                                        isClearable={true}
                                        classNamePrefix="select-menu"
                                        className="select-menu"
                                        onChange={(e) => { this.changeHandler(e ? e.value : '', 'currency') }}
                                    />
                                </div>
                                <div className="field-group">
                                    <label>List Price (one time) <span>*</span></label>
                                    <input
                                        min="0"
                                        type="number"
                                        className="form-control"
                                        value={this.state.formData.listPriceOneTime}
                                        onChange={(e) => this.changeHandler(e.target.value, 'listPriceOneTime')}
                                    />
                                </div>
                             </>
                        }
                    </div>
                </div>
                <div className="button-group">
                    <Button
                        bType="button"
                        bValue="Save"
                        cName="btn btn-primary"
                        clickHandler={() => { this.handleSave() }}
                    />
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
            getCurrencies
        }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);

//this.props.handleSave('price', this.state.formData)



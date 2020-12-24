import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import InputElement from '../../common/Input';
import Button from '../../common/Button';
import { forgotPassword } from '../APIs/action';
import LoginSlide from "../../common/LoginSlide";
import CreatePassword from './CreatePassword';
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: {},
            gotoCreatePassword:false,
        }
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        }, () => console.log("this.State>>", this.state))
    }

    vaildateEmail = () => {
        const { email } = this.state;
        const emailRegex = /\S+@\S+\.\S+/;
        let error = {}
        let flag = 1;
        if (!emailRegex.test(email)) {
            error.isEmail = 'Please enter valid Email';
            flag = 0;
        }
        else {
            error.isEmail = '';
            flag = 1;
        }
        this.setState({ error });
        return flag;
    }
    handleEmail = async() => {
        if(this.vaildateEmail()){
            const response = await this.props.forgotPassword(this.state.email);
           // if(response && response.status){
               // toast.success(response.message)
               // console.log('MMMMMMM',response)
            this.setState({
                gotoCreatePassword:true
            })
        // }
        // else{
        //     toast.error("Email id doesn't exist")
        // }
        }        
    }
    
    render() {
        const { error, gotoCreatePassword, email } = this.state;
        return (
            <>
            { gotoCreatePassword ?
            <CreatePassword backToLogin={this.props.backToLogin} email={email} />
            :
            <React.Fragment>
                {/* <LoginSlide /> */}

                <section className="right-section">
                    <div className="sign-in-form">
                        <h3>Forgot Your Password?</h3>
                        <p>We’ll help you reset it and get back on track.</p>
                        <div className="form-group">
                            <InputElement
                                name="email"
                                placeholder="email"
                                cName="form-control"
                                changeHandler={this.handleChange}
                                onBlur={this.vaildateEmail}
                                errMsg={error.isEmail}
                            />

                        </div>
                        <div className="forget" onClick={this.props.backToLogin}>
                            <a href> Back to login </a>
                        </div>
                        <Button
                            cName="btn btn-primary"
                            bValue="Reset Password"
                            clickHandler={this.handleEmail}
                        />
                        
                        
                    </div>
                </section>
            </React.Fragment>
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('nnnn', state)
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(
            {
                forgotPassword
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
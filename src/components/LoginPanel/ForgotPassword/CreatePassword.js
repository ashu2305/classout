import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import BrandImage from "../../../assets/images/virtur@2x.png";
import InputElement from '../../common/Input';
import Button from '../../common/Button';
import { resetPassword } from '../APIs/action';
class CreatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      error: {}
    }
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  onSubmit = async () => {
    const { newPassword } = this.state;
    const payload = {
      newPassword,
      token: this.props && this.props.secretLink,
    }
    const response = await this.props.resetPassword(payload);
    this.props.backToLogin();
    if (response && response.status) {
      toast.success(response.message)
      this.props.backToLogin();
    }
    else {
      toast.error(response.message)
    }
  }
  validatePassword = () => {
    const { newPassword, confirmPassword } = this.state;
    let error = {};
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$_!@])[A-Za-z\d$@!_]{8,16}$/;
    if (!passRegex.test(newPassword) && newPassword) {
      error.isPassValid = 'Password should be mix of cap letters, numbers & symbols of min 8 characters';
    }
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      error.isPasswordMatch = 'Password does not match';
    }
    else {
      error.isPasswordMatch = '';
    }
    this.setState({ error })
  }

  render() {
    const { error } = this.state;
    return (
      <div className="create-password">

        <section className="right-section pad-0">
          {/* <div className="logo">
            <img src={BrandImage} alt="virtur" />
          </div> */}
          <div className="sign-in-form">
            <h3>Enter your new password</h3>
            <p>Please make sure your password has at least 5 characters</p>
            <div className="form-group">
              <InputElement
                name="newPassword"
                placeholder="New Password"
                type="password"
                cName="form-control"
                changeHandler={this.handleChange}
                onBlur={this.validatePassword}
                errMsg={error.isPassValid}
              />
            </div>
            <div className="form-group">
              <InputElement
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                cName="form-control"
                changeHandler={this.handleChange}
                onBlur={this.validatePassword}
                errMsg={error.isPasswordMatch}
              />
            </div>
            <Button
              cName="btn btn-primary"
              bValue="Set New Password"
              clickHandler={this.onSubmit}
            />
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    secretLink: state.auth.secretLink
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      resetPassword
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePassword);
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ToggleButton from '../ToggleButton';
import './style.scss';
import { updateTheme } from './APIs/action';

const ThemeMode = (props) => {
  const changeTheme = () => {
    const { updateTheme } = props;
    updateTheme('darkMode');
  }

  const isDarkMode = props.darkMode;
  return (
    <div className="vr-theme">
      <label className="switch-button">
        <input type="checkbox" name="switch" onClick={changeTheme} checked={!isDarkMode ? false : true} />
        <div className="switch-slider switch-round">
          <span className="isChecked">
            <i className="icon-moon" />
          </span>
          <span className="isUnChecked">
            <i className="icon-sun" />
          </span>
        </div>
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    darkMode: 'DARk_MODE'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({
        updateTheme,
      }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeMode);

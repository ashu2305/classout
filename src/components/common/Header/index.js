import React, { Component } from 'react';

import User from '../../UserPanel';
import ThemeMode from '../ThemeMode';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import dmLogo from '../../../assets/images/dm-logo.png';
import Search from '../Search';
import Notification from '../Notification';

import './style.scss';

class Header extends Component {
  themeChangeHandler = (event) => {
    console.log('Clicked')
  }

  render() {
    const { additionalDetails, isDarkMode } = this.props;
    return (
      <header className="main-header">
            
      </header>
    );
  }
}


export default Header;

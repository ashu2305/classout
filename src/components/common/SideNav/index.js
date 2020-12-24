import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const navMenuItems = [
  {
    labelName:'my dashboard',
    linkName:'dashboard',
    iconName: 'icon-dashboard'
  },
  {
    labelName:'user management',
    linkName:'management',
    iconName: 'icon-user-management',
    children: [
      {
        labelName: 'users',
        linkName: 'users'
      },
      {
        labelName: 'roles',
        linkName: 'roles'
      }
    ]
  },
  {
    labelName:'content',
    linkName:'content',
    iconName: 'icon-content',
    children: [
      {
        labelName:'movies',
        linkName:'movies',
        id: 1,
        name: "movies"
      },
      {
        labelName:'webseries',
        linkName:'webseries',
      }
    ]
  },
  {
    labelName:'editorial',
    linkName:'editorial',
    iconName: 'icon-editorial',
    children: [
      {
        labelName: 'category',
        linkName:'category'
      }
    ]
  },
  // {
  //   labelName:'texonomy',
  //   linkName:'texonomy',
  //   iconName: 'icon-texonomy'
  // },
  // {
  //   labelName:'settings',
  //   linkName:'settings',
  //   iconName: 'icon-settings'
  // },
];

class SideNave extends Component {
  state = {
    activeTab: 'dashboard',
    activeTabIndex: null
  }

  handleToggleTab = (name, index) => {
    this.setState(prevState=>({
      activeTab: prevState.activeTab !== name ? name : '' ,
      activeTabIndex: index
    }))
  }

  componentDidMount() {
    const { history : { location:{pathname} }} = this.props;
    navMenuItems &&
      navMenuItems.forEach((nav) => {
        if (pathname === nav.linkName || pathname.indexOf(nav.linkName) > -1) {
          this.setState({
            activeTab: nav.linkName,
          });
        }
      });
  }

  render() {
    const { history : { location }} = this.props;
    const { activeTab, activeTabIndex } = this.state;

    const menuItems = navMenuItems && navMenuItems.map((menuItem, index) => {
      let isActive = false;
      let pathname = location.pathname;
      if((pathname.split('/')[1] && pathname.split('/')[1] === menuItem.linkName.replace(/\s+/g, '-').toLowerCase()) || (pathname === '/' && menuItem.linkName==='dashboard')){
          isActive = true;
      }
      return (
        menuItem.children ? (
          <Fragment key={menuItem.linkName} >
          <li  className={(activeTab === menuItem.linkName) || isActive ? "dropdown-menu active" : "dropdown-menu"} key={index} onClick={() => this.handleToggleTab(menuItem.linkName, index)}>
            <Link to={{ pathname: ``, contentId: {id: menuItem.children[0].id}}}>
                <i className={`${menuItem.iconName}`}></i>
                {menuItem.labelName}
            </Link>
            <ul className="menu-dropdown-list" onClick={(event)=> {event.stopPropagation();}}>
              {menuItem.children && menuItem.children.map((child, index) => {
                let isSubActive = child.linkName.replace(/\s+/g, '-').toLowerCase() === pathname.split('/')[2];
                return <li key={`${menuItem.linkName}-${child.linkName}`}className={isSubActive ? "active" : ""} key={index}>
                  {/* <Link to={`/${menuItem.linkName}/${child.linkName}`}>
                      <i className="vr-icon-circle" />
                      {child.labelName}
                  </Link> */}
                  <Link to={{pathname: `/${menuItem.linkName}/${child.linkName}`, contentId: {id: child.id}}}>
                    <i className="vr-icon-circle" />
                    {child.labelName}
                  </Link>
                </li>
              })}
            </ul>
          </li>
          </Fragment>
        ) :
        (<li key={menuItem.linkName} className={ isActive ? "active" : ""} key={index} onClick={() => this.handleToggleTab(menuItem.linkName, index)}>
          <Link to={`/${menuItem.linkName}`}>
            <i className={`${menuItem.iconName}`}></i>
            {menuItem.labelName}
          </Link>
        </li>)
      )
    });
    return (
      <nav>
      {/* <div className="vr-nav-option">
        <ul>
          <li className="active">
            <i className="icon-adult"></i>
            <span>ADULT</span>
          </li>
          <li>
            <i className="icon-kids"></i>
            <span>KIDS</span>
          </li>
        </ul>
      </div> */}
      <ul className="vr-nav">
        {menuItems}
      </ul>
    </nav>
    );
  }
}

export default SideNave;

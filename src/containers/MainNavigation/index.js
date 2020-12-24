import React, {useState, useEffect} from 'react';
import {Navigation} from './style'; 
import {Link,NavLink} from 'react-router-dom';
import Dashboard from '../../assets/images/icons/dashboard.png';
import Content from '../../assets/images/icons/content.png';
import GoLive from '../../assets/images/icons/golive.png';
import Library from '../../assets/images/icons/library.png';
import Design from '../../assets/images/icons/design.png';
import Team from '../../assets/images/icons/team.png';
import Subscribers from '../../assets/images/icons/subscriber.png';
import Settings from '../../assets/images/icons/setting.png';
import Menu from './menu';

const navList = [
    {
        menuIcon: <img src={Dashboard} alt="" />,
        menuText: 'Dashboard',
        route: '/dashboard',
        subMenu: [],
    },
    {
        menuIcon: <img src={Content} alt="" />,
        menuText: 'Content',
        route: '/content',
        subMenu: []
    },
    {
        menuIcon: <img src={GoLive} alt="" />,
        menuText: 'Schedule Class',
        route: '/schedule-class',
        subMenu: []
    },
    {
        menuIcon: <img src={Library} alt="" />,
        menuText: 'Library',
        route: '/library',
        subMenu: []
    },
    {
        menuIcon: <img src={Design} alt="" />,
        menuText: 'Design',
        route: '/design',
        subMenu: []
    },
    // {
    //     menuIcon: <img src={Team} alt="" />,
    //     menuText: 'Team',
    //     route: '/team',
    //     subMenu: []
    // },
    {
        menuIcon: <img src={Subscribers} alt="" />,
        menuText: 'Subscribers',
        route: '/subscribe',
        subMenu: []
    },
    {
        menuIcon: <img src={Settings} alt="" />,
        menuText: 'Settings',
        route: '/settings',
        subMenu: []
    },
    // {
    //     menuIcon: <img src={Dashboard} alt="" />,
    //     menuText: 'Go Live',
    //     route: '',
    //     subMenu: [
    //         {
    //             menuIcon: '',
    //             menuText: 'Add Role',
    //             route: '/roles/add',
    //             subMenu: []
    //         },
    //         {
    //             menuIcon: '',
    //             menuText: 'All Role',
    //             route: '/roles/all',
    //             subMenu: []
    //         }
    //     ]
    // },
]

const MainNavigation = () => {
    const [toggle,setToggle] = useState(false);

    return (
        <Navigation className={`side-nav ${toggle ? 'active' : ''}`}>
            <div className="nav-toggle" onClick={()=>setToggle(!toggle)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul className="nav-list">
                {
                    navList.map((data, i) => <Menu key={i} data={data} />)
                }
            </ul>
        </Navigation>
        
    )
}

export default MainNavigation;
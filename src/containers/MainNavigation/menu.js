import React, { useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
const Menu = ({ data }) => {
    const { menuText, subMenu, menuIcon, route } = data;
    const [status, setStatus] = useState(false);
    const menuClick = () => {
        setStatus(!status);
    }
    let { path, url } = useRouteMatch();
    return (
        <>
            <li className="menuList" onClick={() => menuClick()}>
                {
                    route
                        ? <NavLink exact activeClassName="activeLink" className="linkText" to={route}>
                            <i className="navIcon">{menuIcon}</i>
                            <span>{menuText}</span>
                        </NavLink>
                        : <strong className="linkText">
                            <i className="navIcon">{menuIcon}</i>
                            <span>{menuText}</span>
                            <i className={status ? `navArrow active` : 'navArrow'}> </i>
                        </strong>
                }
            </li>
            {
                status && subMenu &&
                <ul className="subNav">
                    {
                        subMenu.map((item, i) => <Menu data={item} />)
                    }
                </ul>
            }
        </>
    )
}
export default Menu;
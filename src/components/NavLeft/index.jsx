import React, { Component } from 'react';
import { Menu } from 'antd';
import menuConfig from '../../config/menuConfig'
import { NavLink } from 'react-router-dom';
const { SubMenu, Item } = Menu;
class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTree: this.renderMenu(menuConfig)
        }
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Item>
        })
    }
    render() {
        return (
            <Menu>
                {this.state.menuTree}
            </Menu>
        );
    }
}

export default NavLeft;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Button, Menu } from 'antd';

import './index.scss';
const Item = Menu.Item;
const ItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getInputValue = event => {

    }
    render() {
        return (
            <div className='container'>
                <div className="topbar-container">
                    <div className="logo">
                        <NavLink to='/home'>
                            <span>小帮厨</span>
                        </NavLink>
                    </div>
                    <div className="search">
                        <Input
                            placeholder="搜索菜谱、食材"
                            onChange={event => this.getInputValue(event)}
                            allowClear
                            size="large"
                        />
                        <NavLink to="/search">
                            <Button
                                type="primary"
                                size="large"
                                onClick={this.menuSearch}
                            >
                                搜菜谱
                        </Button>
                        </NavLink>
                    </div>
                    <div className="menu">
                        <Menu mode="horizontal">
                            <SubMenu
                                title={<span className="submenu-title-wrapper">菜谱分类</span>}
                            >
                                <ItemGroup title="常见主题" />
                                <ItemGroup title="常见食材" />
                                <ItemGroup title="时令食材" />
                            </SubMenu>
                            <Item>
                                <NavLink to="/home">话题</NavLink>
                            </Item>
                            <Item>
                                <NavLink to="/home">我的主页</NavLink>
                            </Item>
                        </Menu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
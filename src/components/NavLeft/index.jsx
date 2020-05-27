import { Menu } from "antd";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import menuConfig from "../../config/menuConfig";
const { SubMenu, Item } = Menu;
class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTree: this.renderMenu(menuConfig),
    };
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Item title={item.title} key={item.title}>
          <NavLink
            to={{
              pathname: item.key || "/dishes",
              state: { keyword: item.keyword || item.title },
            }}
          >
            {item.title}
          </NavLink>
        </Item>
      );
    });
  };
  render() {
    return <Menu>{this.state.menuTree}</Menu>;
  }
}

export default NavLeft;

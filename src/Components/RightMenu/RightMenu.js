import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class RightMenu extends Component {
  render() {
    return (
        <div className="menu-drawer">
            <Link to='/checklist'>
                Checklist
            </Link>
            <Link to='/'>
                Homepage
            </Link>
        </div> 

      /*<Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item>
      </Menu> */
    );
  }
}
export default RightMenu;
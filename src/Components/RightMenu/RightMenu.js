import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class RightMenu extends Component {
  
  render() {
    const { mobile } = this.props;
    const navClass = mobile? "menu-drawer mobile" : "menu-drawer"

    return (
        <div className={navClass}>
            <Link to='/checklist'>
                <div className="menu-button">
                Checklist
                </div>
                
            </Link>

            <Link to='/'>
            <div className="menu-button">
                Homepage
                </div>
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
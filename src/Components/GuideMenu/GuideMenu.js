import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link, withRouter } from 'react-router-dom'
import { Menu, Dropdown, Icon, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class GuideMenu extends Component {
    static contextType = ApiContext;

    handleLogout = () => {
        this.context.handleLogout()
    }

    
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to='/guide'>
                        Guide Home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/guide/prepare-home'>
                        Prepare your home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/guide/pickup-pup'>
                        Pickup Pup
                    </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/guide/pup-home'>
                        First hours with pup
                    </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/guide/meal-time'>
                        Feeding Guide
                    </Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/guide/crate-train'>
                        House training
                    </Link>
                </Menu.Item>
               
            </Menu>)
        
        return (
            <div className="survival-guide-dropdown">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link menu-button" style={{margin: 0}} onClick={e => e.preventDefault()}>
                    Survival Guide <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        )




    }
}
export default GuideMenu;
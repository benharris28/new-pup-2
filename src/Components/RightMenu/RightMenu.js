import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

class RightMenu extends Component {
  static contextType = ApiContext;

  handleLogout = () => {
    this.context.handleLogout()
  }
  
  render() {
    const { mobile } = this.props;
    const { activeUser } = this.context;
    const navClass = mobile? "menu-drawer mobile" : "menu-drawer"

    return (
      <div>
      {activeUser ? 
        <div className={navClass}>
      
          
            <Link to='/dashboard'>
                <div className="menu-button">
                Dashboard
                </div>
                
            </Link>


            <Link to='/'>
            <div 
              className="menu-button"
              onClick={this.handleLogout}>
            Logout
            </div>
            
          </Link>
          </div> 

          :

          <div className={navClass}>
          
           


            <Link to='/login'>
            <div className="menu-button">
            Login
            </div>
            
          </Link>

          <Link to='/signup'>
            <Button className="menu-button signup">
            Sign Up
            </Button>
            
          </Link>
          


          
          </div>

        }
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
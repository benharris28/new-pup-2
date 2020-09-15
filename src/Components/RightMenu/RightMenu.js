import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import GuideMenu from '../../Components/GuideMenu/GuideMenu'
import Cart from '../../Components/Cart/Cart'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Button, Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class RightMenu extends Component {
  static contextType = ApiContext;

  state = {
    current: 'mail',
    visible: false
  }

  



  showDrawer = () => {
    this.setState({
      visible: true,
    }, this.props.closeNav)
  };

onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleLogout = () => {
    this.context.handleLogout()
  }
  
  render() {
    const { match, location, history, mobile } = this.props;
    console.log(this.props)
    const { activeUser } = this.context;
    const navClass = mobile? "menu-drawer mobile" : "menu-drawer"
    const guideCheck = location.pathname.toString().includes('guide') ? true : false
   

    console.log(guideCheck)

    return (
      <div>
      {activeUser ? 
        <div className={navClass}>
      
            {guideCheck &&  
              <GuideMenu />
              }

            <Link to='/shop-home'>
                <div className="menu-button">
                Gear Shop
                </div>
                
            </Link>

            <Link to='/food'>
                <div className="menu-button">
                Food Advisor
                </div>
                
            </Link>

            <Link to='/guide'>
                <div className="menu-button">
                Blog
                </div>
                
            </Link>
            <Link to='/dashboard'>
                <div className="menu-button">
                  <UserOutlined />
                </div>
                
            </Link>
            <div onClick={this.showDrawer}>
              Cart
            </div>  


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
        <Drawer
              
              placement="right"
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
            >
                <Cart />
            </Drawer>
        </div>

     
    );
  }
}
export default withRouter(RightMenu);
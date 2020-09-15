import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import GuideMenu from '../../Components/GuideMenu/GuideMenu'
import { Link, withRouter, useLocation } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const RightMenu = () => {

  
  const { SubMenu } = Menu;
  
 
  const { activeUser } = useContext(ShopContext)
  let location = useLocation()



    //const { mobile } = this.props;

    
    console.log(activeUser)
    const navClass = "menu-drawer"
    const guideCheck = location.pathname.toString().includes('guide') ? true : false
   

    console.log(guideCheck)

    return (
      
          <div>
            {activeUser ? 
              <div className={navClass}>
            
                  {guideCheck &&  
                    <GuideMenu />
                    }
      
                  <Link to='/shop'>
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
                  <div>
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
              </div>
       
      
    
       
     

    );
  }

export default RightMenu;
import React, { Component } from 'react';
import RightMenu from '../RightMenu/RightMenu'
import LeftMenu from '../LeftMenu/LeftMenu'
import { Drawer, Button, Row, Col } from 'antd';
class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
        <nav className="menu-bar">
            <Row className="navbar-row" gutter={8} align="middle">
                <Col flex="auto">
                    <a className="logo" href=" ">Doggo</a>
                </Col>
                <Col xs={0} sm={6} justify="end">
                    <RightMenu />
                </Col>
                <Col xs={6} sm={0}>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                </Col>
            </Row>
        
           
          
            
            <Drawer
              title="Menu"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
                <RightMenu />
            </Drawer>

        </nav>
    );
  }
}
export default Navbar;
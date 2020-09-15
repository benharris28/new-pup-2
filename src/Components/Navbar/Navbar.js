import React, { Component } from 'react';
import RightMenu from '../RightMenu/RightMenu'
import { withRouter } from 'react-router-dom';
import dog from '../../Assets/dog.png'
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
  const { location } = this.props;
  const guideCheck = location.pathname.toString().includes('guide') ? true : false
    
  return (
        <nav className="menu-bar">
            <Row style={{ "height": "5rem" }} className="navbar-row" gutter={8} align="middle">
                <Col style={{ margin: 0, maxWidth: 2000}} flex="auto">
                  <div className="logo-box">
                    

                      <a className="logo" href="/"><h3>Doggo </h3></a>
                      {guideCheck && <span className="guide-logo"><h3>24HR Guide</h3></span>}
                  </div>
                </Col>
                <Col style={{ "maxWidth": "400px" }} xs={0} sm={0} md={12} lg={12}  justify="space-around">
                    <RightMenu />
                </Col>
                <Col style={{ paddingBottom: 10}} xs={6} sm={6} md={0}>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                </Col>
            </Row>
          
        
           
          
            
            <Drawer
              
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
                <RightMenu mobile={"true"} closeNav={this.onClose}/>
            </Drawer>

        </nav>
    );
  }
}
export default withRouter(Navbar);
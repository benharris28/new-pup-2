import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import GearData from '../../BackupData/GearData'
import ApiContext from '../../ApiContext';
import { Layout, Card, Col, Row, Button, Drawer, Avatar } from 'antd';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import dog_gear from '../../Assets/dog_gear.jpg'
import bowl_illustration from '../../Assets/bowl_illustration.png'
import gear_banner from '../../Assets/gear_banner.png'


class Gear extends React.Component {
    static contextType = ApiContext;

    state = {
        gear: GearData.categories,
        visible: false,
        placement: 'right',
        category: 1,
        windowSize: ''

    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        this.handleResize()
     }

    showDrawer = (id) => {
        this.setState({
            visible: true,
            category: id
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    handleResize = () => {
        this.setState({
            windowSize: window.innerWidth
        })
    }

    handleDrawerSize = () => {
        const { windowSize } = this.state;
        
        if(windowSize > 900) {
            return 600
        }

        if (windowSize > 500 && windowSize < 900) {
            return 350
        }

        else {
            return 300
        }
    }


    render() {

        const { Content } = Layout;
        const { Meta } = Card;
        const { gear, placement, visible } = this.state;
        const fullWidth = global.window.innerWidth;
        const gearFilter = gear.filter(g => g.category_id == this.state.category)
        const drawerZIndex = visible? 1000 : -1
        const width = window.addEventListener('resize', this.handleResize);
        const drawerSize = this.handleDrawerSize()

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name
       
        console.log(drawerSize)
        console.log(gearFilter)
        

        // Combine gear list with gear status from users table
       

        

        return (
            <div>
                <Layout className="white">
                <div className="guide-banner">

                        <div className="guide-banner-image blue" />

                        

                        <div className="guide-banner-title">
                        <div className="back-to-checklist-button-test">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Checklist
                                </Button>
                            </Link>

                        </div>

                            <h5>{activeDoggo}'s Checklist</h5>
                            <h1>All the gear you need in one place</h1>

                        </div>

                    </div>
                    <div className="secondary-banner white center space">
                        <div className="secondary-banner-content">
                        
                        <div className="expert-image">
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                        <h5 className="font-purple">Our resident dog trainer, XX Trainer, has made a list of the must-have gear to welcome home your doggo.</h5>
                        <h5>For each category, we offer two different options: basic and premium. Both will do the trick, but if you feel like getting fancy, you have the option!</h5>
                    </div>
                    </div>

                    <div className="content-section dark-purple">
                        <div className="checklist-page content center">
                            <div className="checklist-page-alert">
                                <ExclamationCircleOutlined className="checklist-icon" />
                                <h2 className="font-coral">Heads up!</h2>
                                <h5 className="font-white">We recommend ordering all your gear by <span className="complete-by-date">{completeByDates.gear}</span>  to make sure everything arrives in time!</h5>
                            </div>

                        </div>
                    </div>

                    <Content
                        //style={{ padding: '0 50px' }}
                        className="page-content">



                        <div className="page-intro">
                            <h2>Gear List</h2>
                            <h4>This list is customized for {activeDoggo}. This is everything they will need. As long as you have an item from each category, you'll be ready. </h4>
                        </div>

                        <div className="card-box">
                        
                        <h3>Gear you'll need every month</h3>
                        <Row
                                className="gear-row"
                                gutter={[16,24]}
                                style={{ margin: 0 }}
                            >
                                 {gear.filter(item => item.theme == "monthly-good").map(gearCard =>
                                    <Col
                                        className="gutter-row" xs={12} sm={12} md={12} lg={6}
                                        key={gearCard.category_id}>
                                        <div className="gear-card-box">
                                        <Card
                                            onClick={() => this.showDrawer(gearCard.category_id)}
                                            hoverable
                                            className="gear-card"
                                            cover={<img
                                                className="card-image"
                                                alt="example"
                                                src={gearCard.category_image} />}
                                        >
                                            <Meta
                                                className="card-content"
                                                title={gearCard.category}
                                                description={gearCard.description_text}>

                                            </Meta>

                                            <div className="card_purchase_button">
                                                
                                                <Button
                                                        type="primary"
                                                        onClick={() => this.showDrawer(gearCard.category_id)}>
                                                        See products
                                                </Button>
                                                
                                              
                                            </div>

                                        </Card>
                                        </div>
                                    </Col>

                                )}
                            </Row>
                            </div>

                            <div className="card-box">

                            <h3>Gear for your home</h3>
                            <Row
                                className="gear-row"
                                gutter={[16,24]}
                                style={{ margin: 0 }}
                            >

                                {gear.filter(item => item.theme == "home-good").map(gearCard =>
                                    <Col
                                        className="gutter-row" xs={12} sm={12} md={12} lg={6}
                                        key={gearCard.category_id}>
                                        <div className="gear-card-box">
                                        <Card
                                            onClick={() => this.showDrawer(gearCard.category_id)}
                                            hoverable
                                            className="gear-card"
                                            cover={<img
                                                className="card-image"
                                                alt="example"
                                                src={gearCard.category_image} />}
                                        >
                                            <Meta
                                                className="card-content"
                                                title={gearCard.category}
                                                description={gearCard.description_text}>

                                            </Meta>

                                            <div className="card_purchase_button">
                                                
                                                <Button
                                                        type="primary"
                                                        onClick={() => this.showDrawer(gearCard.category_id)}>
                                                        See products
                                                </Button>
                                                
                                              
                                            </div>

                                        </Card>
                                        </div>
                                    </Col>

                                )}

                            </Row>
                            </div>

                            <div className="card-box">
                            <h3>Apparel for your doggo</h3>
                            <Row
                                className="gear-row"
                                gutter={[16,24]}
                                style={{ margin: 0 }}
                            >

                                {gear.filter(item => item.theme == "apparel").map(gearCard =>
                                    <Col
                                        className="gutter-row" xs={12} sm={12} md={12} lg={6}
                                        key={gearCard.category_id}>
                                        <div className="gear-card-box">
                                        <Card
                                            onClick={() => this.showDrawer(gearCard.category_id)}
                                            hoverable
                                            className="gear-card"
                                            cover={<img
                                                className="card-image"
                                                alt="example"
                                                src={gearCard.category_image} />}
                                        >
                                            <Meta
                                                className="card-content"
                                                title={gearCard.category}
                                                description={gearCard.description_text}>

                                            </Meta>

                                            <div className="card_purchase_button">
                                                
                                                <Button
                                                        type="primary"
                                                        onClick={() => this.showDrawer(gearCard.category_id)}>
                                                        See products
                                                </Button>
                                                
                                              
                                            </div>

                                        </Card>
                                        </div>
                                    </Col>

                                )}

                            </Row>
                            </div>                           
                            
                            {this.state.category !== null && 
                            <Drawer
                                title="Gear Options"
                                placement={placement}
                                closable={false}
                                onClose={this.onClose}
                                visible={visible}
                                key={placement}
                                width={drawerSize}
                                zIndex={drawerZIndex}               
                                className="gear-drawer"
                            >
                                <div className="drawer-intro">
                                    <h4>{gearFilter[0].category}</h4>
                                    <h5>{gearFilter[0].category_description}</h5>
                                    <h5>{gearFilter[0].choice_description}</h5>
                                </div>
                                {gearFilter[0].products.map(product => 
                                <Card 
                                    key={product.product}
                                    className="gear-info-card" 
                                    cover={<img
                                        className="drawer-image"
                                        alt="example"
                                        src={product.image} />}
                                   >
                                      <div className="gear-card-drawer-content">
                                        <div className="gear-card-drawer-description">
                                            <h5>{product.brand}</h5>
                                            <h6>{product.product}</h6>
                                            <p>{product.description_text}</p>
                                        </div>

                                        <div className="drawer-button">
                                                <a target='_blank' rel="noopener noreferrer" href={`${product.canada_link}`}>
                                                    <Button
                                                        type="primary">
                                                        {product.purchase_text}
                                                </Button>
                                                </a>
                                               
                                            </div>
                                            </div>
                                  
                                </Card>
                               )}
                            </Drawer>
                            }


                        


                    </Content>
                    <div className="next-section-button blue">
                    <div className="next-section-button-content">
                            <h4>Your doggo has all the right gear!</h4>
                            <h5>Let's move on and find your pup some nutritious food. Click below to go to the next section</h5>
                            <Link to='/food'>
                            <Button>
                                Up Next: Find the best food
                                    </Button>
                        </Link>
                        </div>
                        

                    </div>
                </Layout>


            </div>
        )
    }
}

export default Gear;
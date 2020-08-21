import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import GearData from '../../BackupData/GearData'
import ApiContext from '../../ApiContext';
import { Layout, Card, Col, Row, Button, Drawer, Avatar } from 'antd';
import { UserOutlined, ExclamationCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import dog_gear from '../../Assets/dog_gear.jpg'
import bowl_illustration from '../../Assets/bowl_illustration.png'
import stock_image from '../../Assets/stock_image.png'


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

        if (windowSize > 900) {
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
        const drawerZIndex = visible ? 1000 : -1
        const width = window.addEventListener('resize', this.handleResize);
        const drawerSize = this.handleDrawerSize()

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name

        console.log(drawerSize)
        console.log(gearFilter)


        // Combine gear list with gear status from users table




        return (
            <div>
                <div className="hero light-pink">
                    <div className="container">
                        <div className="title-centre">
                            <h1 className="display-heading">
                                Welcome to {activeDoggo}'s Gear Page!
                            </h1>
                            <div className="hero-details">
                                Expert recommended gear. Everything you need - nothing you don't. All the gear you need in one place
                        </div>


                        </div>

                    </div>
                    <div className="time-tracker-container">
                        <div className="checklist-icon-box">
                            <CalendarOutlined className="checklist-icon font-white" />
                        </div>
                        <div className="time-tracker">
                            <h5 className="font-black">We recommend ordering all your gear by <span className="complete-by-date">{completeByDates.gear}</span>  to make sure everything arrives in time!</h5>
                        </div>
                    </div>

                </div>


                <Layout className="grey">

                    <div className="content-section white">
                        <div className="secondary-banner-content space">

                            <div className="expert-image">
                                <Avatar size={64} icon={<UserOutlined />} />
                            </div>
                            <h5 className="font-purple">Our resident dog trainer, XX Trainer, has made a list of the must-have gear to welcome home your doggo.</h5>
                            <h5>For each category, we offer two different options: basic and premium. Both will do the trick, but if you feel like getting fancy, you have the option!</h5>
                        </div>
                    </div>



                    <div className="hero light-pink gear-hero">
                    <div className="container">
                        <div className="title-centre">
                            <h1 className="display-heading">
                                {activeDoggo}'s Gear List
                            </h1>
                            <div className="hero-details">
                            This list is customized for {activeDoggo}. This is everything they will need. As long as you have an item from each category, you'll be ready. 
                        </div>


                        </div>

                    </div>
                    </div>

                    <div className="gear-list-container">
                    <div className="content-container gear-list">
                    <div className="bg-container bg-top">
                    <div className="tab-menu">
                                <Button className="banner-button">Essentials</Button>
                                <Button className="banner-button">Apparel</Button>
                                <Button className="banner-button">Home Goods</Button>
                            </div>
                            
                            <h3 className="card-box-subtitle font-black">Gear you'll need every month</h3>
                          
                                <Row
                                    className="gear-grid"
                                    gutter={[16, 24]}
                                    style={{ margin: 0 }}
                                >
                                    {gear.filter(item => item.theme == "monthly-good").map(gearCard =>
                                        <Col
                                            className="gutter-row" xs={12} sm={12} md={12} lg={8}
                                            style={{ margin: 0 }}
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

                                <h3 className="card-box-subtitle font-black">Gear for your home</h3>
                                <Row
                                    className="gear-grid"
                                    gutter={[16, 24]}
                                    style={{ margin: 0 }}
                                >

                                    {gear.filter(item => item.theme == "home-good").map(gearCard =>
                                        <Col
                                            className="gutter-row" xs={12} sm={12} md={12} lg={8}
                                            style={{ margin: 0 }}
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



                                <h3 className="card-box-subtitle font-black">Apparel for your doggo</h3>
                                <Row
                                    className="gear-grid"
                                    gutter={[16, 24]}
                                    style={{ margin: 0 }}
                                >

                                    {gear.filter(item => item.theme == "apparel").map(gearCard =>
                                        <Col
                                            className="gutter-row" xs={12} sm={12} md={12} lg={8}
                                            style={{ margin: 0 }}
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
                                                <h5 className="font-purple">{product.brand}</h5>
                                                <h6 className="font-coral">{product.product}</h6>
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



                            
                            </div>
                            </div>
                            </div>



                

                   
                    <div className="cta-section white">
                        <div className="container-2">
                            <div className="cta-banner-dark">
                                <div className="cta-container">
                                    <div className="next-section-content">
                                        <h2 className="font-white">Your doggo has all the right gear!</h2>
                                        <h5 className="font-white">Let's move on and find your pup some nutritious food. Click below to go to the next section</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/food'>
                                            <Button className="button-cta">
                                                Up Next: Find the best food
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                </Layout>


            </div>
        )
    }
}

export default Gear;
import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import GearData from '../../BackupData/GearData'
import ApiContext from '../../ApiContext';
import { Layout, Card, Col, Row, Button, Drawer, Avatar } from 'antd';
import { UserOutlined, ExclamationCircleOutlined, CalendarOutlined, RightCircleTwoTone } from '@ant-design/icons';
import dog_gear from '../../Assets/dog_gear.jpg'
import dog_collar from '../../Assets/dog_collar.png'
import bowl_illustration from '../../Assets/bowl_illustration.png'
import stock_image from '../../Assets/stock_image.png'


class Gear extends React.Component {
    static contextType = ApiContext;

    state = {
        gear: GearData.categories,
        visible: false,
        placement: 'right',
        category: 1,
        windowSize: '',
        gearTab: 'monthly-good'

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

    filterGear = (name) => {
        this.setState({
            gearTab: name
        })
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
            <div className="white">
               



                    <div className="hero light-purple">
                      
                    <div className="container">
                        <div className="selections">
                            Step 1
                        </div>
                        <div className="title-centre">
                            <h1 className="display-heading">
                                {activeDoggo}'s Gear List
                            </h1>
                            <div className="hero-details">
                            This list is customized for {activeDoggo}. This is everything they will need. As long as you have an item from each category, you'll be ready. 
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

                    <div className="gear-list-container">
                    <div className="content-container gear-list">
                   
   
                            
                        <h4>Essentials</h4>
                        <h5>These are the day-to-day items that you will need to order on a regular basis. Try a "set it and forget it" subscription so you never run out!</h5>

                        <div className="product-loop">
                        {gear.filter(item => item.theme == "monthly-good" ).map(gearCard =>
                                        
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
                                                     >

                                                    </Meta>

                                     
                                                    <div className="dashboard-card-button-box">
                                                        <Button 
                                                            className="dashboard-card-button"
                                                            onClick={() => this.showDrawer(gearCard.category_id)}>
                                                            Go
                                                        </Button>
                                                    </div>

                                                    

                                          </Card>
                        )}
                        </div>

                        <h4>Equipment</h4>
                        <h5>Functional equipment will make your life easier. We've picked out the ones that will be perfect for {activeDoggo}</h5>
                        <div className="product-loop">
                        {gear.filter(item => item.theme == "apparel" ).map(gearCard =>
                                        
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
                                         >

                                        </Meta>

                                     
                                        <div className="dashboard-card-button-box">
                                            <Button 
                                                className="dashboard-card-button"
                                                onClick={() => this.showDrawer(gearCard.category_id)}>
                                                Go
                                            </Button>
                                        </div>

                                        

                              </Card>
                        )}
                        </div>

                         <div className="gear-section-intro">
                         <h4>Stuff for your home</h4>
                        <h5>These will be the fixtures of {activeDoggo}'s home life. We've picked out the absolute essentials to make {activeDoggo}'s transition the smoothest possible</h5>                              
                         </div>

                        
                        <div className="product-loop">
                        {gear.filter(item => item.theme == "home-good" ).map(gearCard =>
                                        
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
                                         >

                                        </Meta>

                                        <div className="dashboard-card-button-box">
                                            <Button 
                                                className="dashboard-card-button"
                                                onClick={() => this.showDrawer(gearCard.category_id)}>
                                                Go
                                            </Button>
                                        </div>

                                        

                              </Card>
                        )}
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

                   
                  
            


            </div>
        )
    }
}

export default Gear;
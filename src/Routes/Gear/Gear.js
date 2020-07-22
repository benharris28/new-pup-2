import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import ProductData from '../../BackupData/ProductData'
import GearData from '../../BackupData/GearData'
import ApiContext from '../../ApiContext';
import { Layout, Content, Space, Card, Col, Row, Button, Drawer } from 'antd';
import dog_gear from '../../Assets/dog_gear.jpg'
import bowl_illustration from '../../Assets/bowl_illustration.png'
import gear_banner from '../../Assets/gear_banner.png'

class Gear extends React.Component {
    static contextType = ApiContext;

    state = {
        gear: GearData.categories,
        gear_dog_crate: false,
        gear_dog_bowls: true,
        visible: false,
        placement: 'right',
        category: 1

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


    render() {

        const { Content } = Layout;
        const { Meta } = Card;
        const { gear, placement, visible } = this.state;
        const fullWidth = global.window.innerWidth;
        const gearFilter = gear.filter(g => g.category_id == this.state.category)
        const drawerZIndex = visible? 1000 : -1
        console.log(gearFilter)
        

        // Combine gear list with gear status from users table
       

        

        return (
            <div>
                <Layout>
                    <div className="guide-banner">

                        <div className="guide-banner-image"  />

                        <div className="back-to-checklist-button-test">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Checklist
            </Button>
                            </Link>

                        </div>

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h3>The Gear You Need</h3>

                        </div>

                    </div>
                    <Content
                        //style={{ padding: '0 50px' }}
                        className="page-content">



                        <div className="page-intro">
                            <h1>All the gear you need</h1>
                            <h5>Here are the absolute essentials for bringing a puppy home. Top trainer, XX trainer, recommends these products</h5>
                        </div>

                        <div className="card-box">
                            <Row

                                gutter={[16,24]}
                            >

                                {gear.map(gearCard =>
                                    <Col
                                        className="gutter-row" sm={24} md={8}
                                        key={gearCard.category_id}>
                                        <Card
                                            onClick={() => this.showDrawer(gearCard.category_id)}
                                            hoverable
                                            className="card"
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
                                                
                                                <MarkComplete tag={gearCard.tag} />
                                            </div>

                                        </Card>
                                    </Col>
                                )}

                            </Row>
                            </div>                           
                            
                            <Drawer
                                title="Gear Options"
                                placement={placement}
                                closable={false}
                                onClose={this.onClose}
                                visible={visible}
                                key={placement}
                                width={fullWidth > 500? fullWidth - 300 : 300}
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
                                    key={product.category_id}
                                    className="gear-info-card" 
                                    cover={<img
                                        className="drawer-image"
                                        alt="example"
                                        src={product.image} />}
                                   >
                                        <Meta
                                                className="card-content"
                                                title={product.product}
                                                description={product.description_text}>

                                        </Meta>

                                        <div className="card_purchase_button">
                                                <a target='_blank' rel="noopener noreferrer" href={`${product.canada_link}`}>
                                                    <Button
                                                        type="primary">
                                                        Buy it!
                                                </Button>
                                                </a>
                                               
                                            </div>
                                  
                                </Card>
                               )}
                            </Drawer>


                        


                    </Content>
                    <div className="next-section-button">
                        <Link to='/food'>
                            <Button>
                                Up Next: Find the best food
                                    </Button>
                        </Link>

                    </div>
                </Layout>


            </div>
        )
    }
}

export default Gear;
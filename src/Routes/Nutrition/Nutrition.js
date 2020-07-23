import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import NutritionMobile from '../../Components/NutritionMobile/NutritionMobile'
import { Layout, Content, Carousel, Card, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Nutrition extends React.Component {
    render() {
        const { Content } = Layout;
        return (
            <div>
                <Layout>
                    <div className="guide-banner">

                        <div className="guide-banner-image" />

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
                        className="page-content">

                            <NutritionMobile />

                    </Content>

                </Layout>
            </div>
        )
    }
}

export default Nutrition;
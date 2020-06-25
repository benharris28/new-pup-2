import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../Components/Map/Map'
import { Layout, Content, Button} from 'antd';


class Vet extends React.Component {

    state = {
        // change to default location for that city
        userLocation: null
    }

    componentDidMount = () => {
        window.navigator.geolocation.getCurrentPosition((latlng) => {
            this.setState({
                userLocation: {
                    lat: latlng.coords.latitude,
                    lng: latlng.coords.longitude
                }
            })
        })
    }

    render() {
        const { Content } = Layout;

        return (
            <div>
                <Layout>
                    <Content
                        style={{ padding: '0 50px'}}
                        className='page-content'>

                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button 
                                    type="primary">
                                        Back to checklist
                                </Button>
                            </Link>
                                    
                        </div> 

                        <div>
                            <h1>Let's find the best vet near you</h1>
                            <Map center={this.state.userLocation} />
                        </div>

                        </Content>
                </Layout>
               
            </div>
        )
    }
}

export default Vet;
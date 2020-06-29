import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../Components/Map/Map'
import MapApiService from '../../services/map-api-service'
import { Layout, Content, Button} from 'antd';


class Vet extends React.Component {

    state = {
        // change to default location for that city
        userLocation: null,
        postal: '',
        markers: []
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

    handleSubmit = () => {
        MapApiService.getGeocode(this.state.postal)
            .then(res => {
                console.log(res)
                const lat = res.results[0].geometry.location.lat
                const lng = res.results[0].geometry.location.lng
                console.log(lat)
                
                MapApiService.getMarkers(lat,lng)
                    .then(markers => {
                        this.setState({
                            markers: markers
                        })
                    })
            })
    }

    handleInput = (postal) => {
        this.setState({
            postal: postal
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
                            <input
                                type="text"
                                onChange={e => this.handleInput(e.target.value)}
                                 />
                            <Button
                                onClick={this.handleSubmit}>
                                Hello
                            </Button>
                            
                            <Map center={this.state.userLocation} />
                        </div>

                        </Content>
                </Layout>
               
            </div>
        )
    }
}

export default Vet;
import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../Components/Map/Map'
import MapApiService from '../../services/map-api-service'
import { Layout, Content, Button, Alert, Card, List, Avatar } from 'antd';


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
                console.log(lng)

                MapApiService.getMarkers(lat, lng)
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
        const { markers } = this.state;
        console.log(this.state.markers)

        return (
            <div>
                <Layout>
                    <Content
                        //style={{ padding: '0 50px'}}
                        className='page-content'>

                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to checklist
                                </Button>
                            </Link>

                        </div>

                        <div className="alert-box">
                            <Alert
                                message="Heads Up!"
                                description="Book your first checkup within 2 days of bringing home Russell (July 10th)"
                                type="warning"
                                showIcon
                                closable
                            />
                        </div>

                        <div className="page-intro">
                            <h1>Let's find the best vet near you</h1>
                            <div className="page-intro">
                                You will need to book a checkup within 2 days of bringing home Russell
                            </div>
                        </div>

                        <div className="find_vet_input">
                            <h5>Enter your postal code to find reputable vets near you</h5>
                            <input
                                type="text"
                                onChange={e => this.handleInput(e.target.value)}
                            />
                            <Button
                                onClick={this.handleSubmit}>
                                Find vets
                                </Button>
                        </div>

                        <div className="vet-map">
                            <Map
                                center={this.state.userLocation}
                                markers={this.state.markers} />
                        </div>

                        {markers.length > 0 &&
                            <div className="vet-list">
                                <h4>List View</h4>
                              
                                {markers.map(marker =>
                                    <Card className="vet-card" key={marker.id} title={marker.name} extra={<a href="#">Site</a>}>
                                        <p>{marker.address}</p>

                                    </Card>
                                )}

                            </div>
                        }

                        <div className="next-section-button">
                            <Link to='/vet'>
                                <Button>
                                    Up Next: Puppy Classes
                                    </Button>
                            </Link>

                        </div>




                    </Content>
                </Layout>

            </div>
        )
    }
}

export default Vet;
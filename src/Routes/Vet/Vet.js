import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../Components/Map/Map'
import MapApiService from '../../services/map-api-service'
import { Layout, Content, Button, Alert, Card, Row, Col } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

class Vet extends React.Component {

    state = {
        // change to default location for that city
        userLocation: null,
        postal: '',
        markers: []
    }

   
    componentDidMount = () => {

        window.scrollTo(0, 0);

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
                <Layout className="white">
                    <div className="guide-banner">

                        <div className="guide-banner-image dark-green" />

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
                            <h1>Let's find Russell a great vet!</h1>

                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content">


                            <div className="checklist-page-section-intro">
                                <h2>We found some great vets for Russell</h2>
                                <h5>We consider the vet a necessary evil. It pays to have one that you trust not too far from your home for wellness checkups or if your pup isn't feeling well</h5>
                                <h5>We did the hard work of finding the best vets in your neighborhood. All you have to is pick one!</h5>
                            </div>
                        </div>
                    </div>

                    <div className="content-section dark-purple">
                        <div className="checklist-page content center">
                            <div className="checklist-page-alert">
                                <ExclamationCircleOutlined className="checklist-icon" />
                                <h2 className="font-coral">Heads up!</h2>
                                <h5 className="font-white">Russell will need a wellness checkup with a vet within 2 days of him coming home! (August 5th)</h5>
                            </div>

                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content">
                        <div className="vet-find-container">

                        
                            <div className="vet-finder">

                                <div className="checklist-page-section-intro">

                                    <h3>Vets near you</h3>
                                    <h5>We have a list of the most trusted vets in your area</h5>
                                </div>

                                <div className="vet-finder-input">
                                    <h5>Enter your postal code to find reputable vets near you</h5>
                                    <div className="vet-finder-input-box">
                                    <input
                                        type="text"
                                        onChange={e => this.handleInput(e.target.value)}
                                    />
                                    <Button
                                        className="vet-finder-button"
                                        onClick={this.handleSubmit}>
                                        Find vets
                                            </Button>
                                </div>
                                </div>


                            </div>

                            <div className="vet-map">
                                <Map
                                    center={this.state.userLocation}
                                    markers={this.state.markers} />
                            </div>
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
                        
                        
                        
                        </div>
                        <div>


                            









                        </div>

                       







                    </div>





















                    <div className="next-section-button dark-green">
                    <div>
                            <h4>Got your vet? That wasn't so scary!</h4>
                            <h5>Time to teach your pup some manners at puppy class! Click below to go to the next section</h5>
                        </div>
                        <Link to='/training'>
                            <Button>
                                Up Next: Puppy Classes
                                    </Button>
                        </Link>

                    </div>
                </Layout>

            </div>
        )
    }
}

export default Vet;
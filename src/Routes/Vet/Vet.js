import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../Components/Map/Map'
import MapApiService from '../../services/map-api-service'
import ApiContext from '../../ApiContext';
import { Layout, Button, Card, Row, Col } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import dog_hero_nutrition from '../../Assets/dog_hero_nutrition.png'


class Vet extends React.Component {
    static contextType = ApiContext;

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
        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name

        const { Content } = Layout;
        const { markers } = this.state;
        console.log(this.state.markers)

        return (
            <div>
                <Layout className="white">

                    <div className="hero yellow">
                        <div className="container">
                            <div className="selections">
                                Step 3
                        </div>
                            <img className="hero-image" alt="dog panting" src={dog_hero_nutrition} />
                            <div className="title-centre image-title">

                                <h1 className="display-heading">
                                    Let's find {activeDoggo} a vet!
                            </h1>
                                <div className="hero-details">
                                    We've got a list of great ones in your area!
                        </div>


                            </div>

                        </div>
                    </div>


                    <div className="content-section white">
                        <div className="content-container">
                            <div className="title-centre">
                                <h1 className="display-heading">We found some great vets for {activeDoggo}</h1>
                                <div className="hero-details">
                                    Dog food comes in all shapes in sizes. It's not just about a huge bag of dry food anymore...
                                </div>
                            </div>


                        </div>
                    </div>




                    <div className="content-section dark-purple">
                        <div className="checklist-page content center">
                            <div className="checklist-page-alert">
                                <ExclamationCircleOutlined className="checklist-icon" />
                                <h2 className="font-coral">Heads up!</h2>
                                <h5 className="font-white">{activeDoggo} will need a wellness checkup with a vet within 3 days of coming home! <span className="complete-by-date">({completeByDates.vetCheckUp})</span></h5>
                            </div>

                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="content-container">
                        <div className="selections">
                            Selection Required
                        </div>
                        <div className="title-centre">
                                <h1 className="display-heading">Vets near you</h1>
                                <div className="hero-details">
                                Dog food comes in all shapes in sizes. It's not just about a huge bag of dry food anymore...
                                </div>
                            </div>


                            <div className="vet-find-container">


                                <div className="vet-finder">

                                  
                                <div className="cta-section white">
                                    <div className="container-2">
                                    <div className="input-banner-dark">
                                        <div className="cta-container">
                                        <div className="input-label-box">
                                        <h5 className="font-white">Enter your postal code to find reputable vets near you</h5>
                                        </div>
                                        <div className="vet-finder-input-box">
                                         
                                        
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                            <input
                                                        type="text"
                                                        onChange={e => this.handleInput(e.target.value)}
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                            <Button
                                                        className="button-cta"
                                                        onClick={this.handleSubmit}>
                                                        Go
                                                    </Button>
                                                </Col>
                                                </Row>

                                          
                                           
                                         
                                     
                                        
                                


                                </div>
                                </div>
                                </div>
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

                        <div className="next-section-button-content">
                            <h4>Got your vet? That wasn't so scary!</h4>
                            <h5>Time to teach your pup some manners at puppy class! Click below to go to the next section</h5>
                            <Link to='/training'>
                                <Button>
                                    Up Next: Puppy Classes
                                    </Button>
                            </Link>
                        </div>


                    </div>
                </Layout>

            </div>
        )
    }
}

export default Vet;
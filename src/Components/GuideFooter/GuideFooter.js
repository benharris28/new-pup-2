import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'
import dog_trick from '../../Assets/dog_trick.png'
import dog_in_car from '../../Assets/dog_in_car.jpg'
import clean_up from '../../Assets/clean_up.jpg'
import dog_eating from '../../Assets/dog_eating.jpg'
import dog_pee from '../../Assets/dog_pee.png'


import { Layout, Button, Row, Col, Collapse, Card, Badge } from 'antd';

class GuideFooter extends React.Component {
    static contextType = ApiContext;

    state = {
        format: '',
        choice: 0
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }


  

    render() {

      
        const guideArticles = [
            {
            id: 1,
              image: <img className="column-item-image" src={clean_up} alt="dog running" />,
              step: 'Step 1',
              title: 'Get your home ready for Russell',
              description: 'Time to hide all those small objects!',
              link: '/guide/prepare-home'
            },
            {
                id: 2,
              image: <img className="column-item-image" src={dog_in_car} alt="stock" />,
              step: 'Step 2',
              title: 'Pick up Russell',
              description: 'The adventure begins!',
              link: '/guide/pickup-pup'
      
            },
            {
                id: 3,
              image: <img className="column-item-image" src={dog_trick} alt="man giving high five to dog" />,
              step: 'Step 3',
              title: 'Teach Russell a few tricks',
              description: 'It is easier thank you think!',
              link: '/guide/pup-home'
            },
            {
                id: 4,
              image: <img className="column-item-image" src={dog_eating} alt="dog next to food bowl" />,
              step: 'Step 4',
              title: 'Give Russell his first meal',
              description: 'We will lay out an easy feeding schedule and answer all your questions',
              link: '/guide/meal-time'
            },
            {
                id: 5,
              image: <img className="column-item-image" src={dog_pee} alt="dog peeing on fire hydrant" />,
              step: 'Step 5',
              title: 'Housetrain Russell',
              description: 'We will walk you through the easiest way to teach your doggo to pee outside',
              link: '/guide/crate-train'
            },
      
      
      
          ]
     


          const selectedArticles = this.props.articles;
          console.log(selectedArticles)
          const articles = guideArticles.filter(article => selectedArticles.includes(article.id))
          console.log(articles)


        return (
            <div>
                <Layout className="white">

                    



                    <div className="content-section white">


                        <div className="content-container">
                        
                                <h3>Explore the 24 hour puppy guide</h3>
                                
                          
                          
                          
                            <div className="column-loop">
                                {articles.map(a => 
                          
                                 <div className="guide-item-container">
                                        <div role="listitem" className="column-item-container">
                                            <Link to={a.link}>
                                                <div className="column-item">
                                                    <div className="column-item-image-box">
                                                        {a.image}
                                                    </div>
                                                    <div className="column-item-content">
                                                      
                                                        <h4 className="column-heading">{a.title}</h4>
                                                        <Link to={a.link}>
                                                        <p className="column-item-detail">Click to learn more</p>
                                                        </Link>
                                                    </div>
                                                   
                                                </div>
                                            </Link>
                                       
                                    </div>
                                    </div>

                                    )}
                           
                              
                            
                                 
                                   

                            </div>
                            </div>

                           
                    </div>























                </Layout>
            </div>
        )
    }
}

export default GuideFooter;
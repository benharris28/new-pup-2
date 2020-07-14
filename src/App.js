import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import Checklist from './Routes/Checklist/Checklist';
import Gear from './Routes/Gear/Gear';
import Food from './Routes/Food/Food';
import Vet from './Routes/Vet/Vet';
import Training from './Routes/Training/Training';
import SurvivalGuide from './Routes/SurvivalGuide/SurvivalGuide';
import PrepareHome from './Routes/GuidePages/PrepareHome'
import PickUpPup from './Routes/GuidePages/PickUpPup'
import Navbar from './Components/Navbar/Navbar'
import UserData from './BackupData/UserData'
import ApiContext from './ApiContext';

import './App.css';

class App extends React.Component {

  state = {
    activeUser: UserData.users[0]
  }

  render() {
    console.log(this.state.activeUser)
    const value = {
      activeUser: this.state.activeUser
    }

    const { Content, Footer } = Layout;

    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Layout>
            
          <Navbar />
            
            <Content>
                <Switch>
                  <Route
                      exact
                      path={'/checklist'}
                      component={Checklist}
                  />
                  <Route
                      exact
                      path={'/gear'}
                      component={Gear}
                  />
                  <Route
                      exact
                      path={'/food'}
                      component={Food}
                  />
                  <Route
                      exact
                      path={'/vet'}
                      component={Vet}
                  />
                  <Route
                      exact
                      path={'/training'}
                      component={Training}
                  />
                  <Route
                      exact
                      path={'/guide'}
                      component={SurvivalGuide}
                  />
                   <Route
                      exact
                      path={'/guide/prepare-home'}
                      component={PrepareHome}
                  />
                  <Route
                      exact
                      path={'/guide/pickup-pup'}
                      component={PickUpPup}
                  />
                
              </Switch>
            </Content>
            
            <Footer>Footer</Footer>
          </Layout>

          

        </div>
      </ApiContext.Provider>
    )
  }
}


export default App;

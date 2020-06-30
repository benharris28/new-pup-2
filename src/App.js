import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import Checklist from './Routes/Checklist/Checklist';
import Gear from './Routes/Gear/Gear';
import Food from './Routes/Food/Food';
import Vet from './Routes/Vet/Vet';
import Training from './Routes/Training/Training';
import SurvivalGuide from './Routes/SurvivalGuide/SurvivalGuide';
import Navbar from './Components/Navbar/Navbar'
import ApiContext from './ApiContext';

import './App.css';

class App extends React.Component {

  state = {
    
  }

  render() {
    const value = {

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

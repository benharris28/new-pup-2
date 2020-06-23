import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import Checklist from './Routes/Checklist/Checklist';
import Gear from './Routes/Gear/Gear';
import Navbar from './Components/Navbar/Navbar'

import './App.css';

class App extends React.Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
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
              
            </Switch>
          </Content>
          
          <Footer>Footer</Footer>
        </Layout>

        

      </div>
    )
  }
}


export default App;

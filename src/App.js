import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import LandingPage from './Routes/LandingPage/LandingPage'
import Checklist from './Routes/Checklist/Checklist';
import Gear from './Routes/Gear/Gear';
import Nutrition from './Routes/Nutrition/Nutrition';
import Vet from './Routes/Vet/Vet';
import Training from './Routes/Training/Training';
import SurvivalGuide from './Routes/SurvivalGuide/SurvivalGuide';
import PrepareHome from './Routes/GuidePages/PrepareHome'
import PickUpPup from './Routes/GuidePages/PickUpPup'
import PupHome from './Routes/GuidePages/PupHome'
import MealTime from './Routes/GuidePages/MealTime'
import CrateTrain from './Routes/GuidePages/CrateTrain'
import Signup from './Routes/Signup/Signup'
import Login from './Routes/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import UserData from './BackupData/UserData'
import ApiContext from './ApiContext';
import * as dayjs from 'dayjs'

import './App.css';

class App extends React.Component {

  state = {
    loggedIn: '',
    activeUser: UserData.users[0],
    completeByDates: ''

  }

  handleDates = () => {
    const { activeUser } = this.state;
    const homeDate = activeUser.dogs[0].home_date
    const birthday = activeUser.dogs[0].birthday
    const today = dayjs();
    const daysUntilHome = dayjs(homeDate).diff(today, 'days')
    const gearCompleteBy = dayjs(homeDate).subtract(2, "weeks").format('MMMM D')
    const vetCompleteBy = dayjs(homeDate).subtract(1, "weeks").format('MMMM D')
    const vetCheckUpCompleteBy = dayjs(homeDate).add(3, "days").format('MMMM D')
    const trainingCompleteBy = dayjs(birthday).add(12, "weeks").format('MMMM D')
    const guideCompleteBy = dayjs(homeDate).subtract(1, "day")
    
    this.setState({
      completeByDates: {
        gear: gearCompleteBy,
        vet: vetCompleteBy,
        vetCheckUp: vetCheckUpCompleteBy,
        training: trainingCompleteBy,
        guide: guideCompleteBy,
        daysLeft: daysUntilHome
      }
    })
  }

  updateActiveUser = (user) => {
    this.setState({ activeUser: user}, () => {
      this.handleDates()
    })

    
    
    
  }

  handleLogout = () => {
    this.setState({
      activeUser: ''
    })
  }

  

  render() {
    console.log(this.state)
    const value = {
      activeUser: this.state.activeUser,
      updateActiveUser: this.updateActiveUser,
      completeByDates: this.state.completeByDates,
      handleLogout: this.handleLogout
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
                      path={'/'}
                      component={LandingPage}
                  />
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
                      component={Nutrition}
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
                  <Route
                      exact
                      path={'/guide/pup-home'}
                      component={PupHome}
                  />
                  <Route
                      exact
                      path={'/guide/meal-time'}
                      component={MealTime}
                  />
                  <Route
                      exact
                      path={'/guide/crate-train'}
                      component={CrateTrain}
                  />
                  <Route
                      exact
                      path={'/signup'}
                      component={Signup}
                  />
                  <Route
                      exact
                      path={'/login'}
                      component={Login}
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

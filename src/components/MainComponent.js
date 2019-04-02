import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Layout} from 'antd';
import SideBar from './SideBarComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Achivement from './AchievementComponent';


const {
   Content
} = Layout;
class Main extends Component {
  
  render() {


    return (
        <Layout>
          <SideBar/>
          <Layout>
            <Content style={{ margin: '0 10px' }}>
                <div style={{ background: '#fff', minHeight:'100vh'}}>
                  <TransitionGroup >
                    <CSSTransition  classNames="page" timeout={300} >
                      <Switch>
                        <Route path="/home" component={()=> <Home/> } />
                        <Route path="/about" component={()=> <About/> } />
                        <Route path="/contact" component={()=> <Contact/> } />
                        <Route path="/achivement" component={()=> <Achivement/> } />
                        <Redirect to='/home' />
                      </Switch>   
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              </Content>
            </Layout>
          </Layout>
    );
  }
}

export default Main;

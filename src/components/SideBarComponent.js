import React, {Component} from 'react';
import Responsive from 'react-responsive';

import {NavLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;
const {
  Header, Sider
} = Layout;
// const SubMenu = Menu.SubMenu;

class SideBar extends Component {
  state = {
    collapsed: true,
  };
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;

    return (
      <React.Fragment>
        <Mobile>
          <Header>
            <Menu theme="dark" mode="horizontal" 
            defaultSelectedKeys={['/home']} selectedKeys={[location.pathname]} style={{ lineHeight: '64px' }}>
              <Menu.Item> <NavLink to="/home"><Avatar src="/assets/images/logo.png" /></NavLink> </Menu.Item>
              <Menu.Item key="/home"><NavLink to="/home"><Icon type="home" /></NavLink></Menu.Item>
              <Menu.Item key="/about"><NavLink to="/about"><Icon type="user" /></NavLink></Menu.Item>
              <Menu.Item key="/contact"><NavLink to="/contact"><Icon type="mail" /></NavLink></Menu.Item>
              <Menu.Item key="/achivement"><NavLink to="/achivement"><Icon type="rise" /></NavLink></Menu.Item>
            </Menu>
          </Header>
        </Mobile>
        <Default>
        <Sider
          collapsed={this.state.collapsed}
        >
          <Menu theme="dark" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} mode="inline">
          <Menu.Item key="/home">
                <NavLink to="/home">
                  <Icon type="home" />
                </NavLink>
              </Menu.Item>
              <Menu.Item key="logo">
                <NavLink to="/home"><Avatar src="/assets/images/logo.png" />
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/about">
                <NavLink to="/about">
                  <Icon type="user" />
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/contact">
                <NavLink to="/contact">
                <Icon type="mail" />
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/achivement">
                <NavLink to="/achivement">
                <Icon type="rise" />
                </NavLink>
              </Menu.Item>
          </Menu>
        </Sider>
    </Default>
      </React.Fragment>
     
    );
  }
}
export default withRouter(SideBar);
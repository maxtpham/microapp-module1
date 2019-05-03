import * as React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from 'react-router-dom'
import { Image, Container, Menu, Divider, Grid, Form, Table, Checkbox, Button, Icon, Sidebar, Segment, Header, Responsive, MenuItemProps, Popup, Dropdown } from 'semantic-ui-react';

require('../../../base/styles/global.css');
import {IAppCss as appcss} from '../../../styles/app.css';

import { connect } from 'react-redux';
import { config } from '../../config';
import * as auth from '../../common/auth';
const styles: appcss = require('../../../styles/app.css');

import { IMasterState, IMasterStateSession } from './types';
import * as actions from "./actions";

import Product from "../subscription/product";
import ProductHeader from "../subscription/product/header";
import Subscription from "../subscription/subscription";
import SubscriptionHeader from "../subscription/subscription/header";

import User from "../system/user";
import UserHeader from "../system/user/header";
import Role from "../system/role";
import RoleHeader from "../system/role/header";

import Document from "../help/document";
import DocumentHeader from "../help/document/header";
import About from "../help/about";
import AboutHeader from "../help/about/header";

import Home from "../other/home";
import HomeHeader from "../other/home/header";
import Profile from "../other/profile";
import ProfileHeader from "../other/profile/header";

interface StateFromProps {
    session: IMasterStateSession
}

interface DispatchFromProps {
    toggle;
}

export default withRouter(connect<StateFromProps, DispatchFromProps, void>(
    (state: IMasterState) => ({
        session: state.session
    }),
    {
        toggle: actions.toggle
    }
)((props: StateFromProps & DispatchFromProps) => (
    <div className={(typeof(props.session.collapsed) === 'undefined' || props.session.collapsed === null || !props.session.collapsed) ? 'mbb-menu-expand' : 'mbb-menu-collapse'}>
        <header className='mbb-table mbb-header'>
            {!!props.session.profile && <div className='mbb-cell mbb-brand'>
                <div className='mbb-table'>
                    <div className='mbb-cell mbb-logo'><NavLink to='/'><span className='mbb-text'>MicroApp<sup>&reg;</sup></span></NavLink></div>
                    <div className='mbb-cell mbb-toggle'><a className='mbb-toggler' onClick={props.toggle}><i className='big sidebar icon'></i><i className='big unordered list icon'></i><i className='remove big icon'></i></a></div>
                </div>
            </div>}
            <div className='mbb-cell mbb-toolbar'>
                <Menu size='huge' secondary>
                    <Menu.Item>
                        {!props.session.profile && (<span>MicroApp<sup>&reg;</sup> PoC</span>)}

                        {!!props.session.profile && (<Route path='/products' component={ProductHeader} />)}
                        {!!props.session.profile && (<Route path='/subscriptions' component={SubscriptionHeader} />)}

                        {!!props.session.profile && (<Route path='/users' component={UserHeader} />)}
                        {!!props.session.profile && (<Route path='/roles' component={RoleHeader} />)}

                        {!!props.session.profile && (<Route path='/document' component={DocumentHeader} />)}
                        {!!props.session.profile && (<Route path='/about' component={AboutHeader} />)}

                        {!!props.session.profile && (<Route path='/' exact component={HomeHeader} />)}
                        {!!props.session.profile && (<Route path='/profile' component={ProfileHeader} />)}
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item trigger={!!props.session.profile ? (<span> <Icon name='user'/>Hi, {props.session.profile.name}</span>) : (<span><Icon size='large' name='user circle'/>Login</span>)}>
                            {!!props.session.profile ?
                            (<Dropdown.Menu>
                                <Dropdown.Item as={NavLink} to='/profile'><Icon name='id card outline'/>Profile</Dropdown.Item>
                                <Divider/>
                                <Dropdown.Item onClick={(e, d) => auth.logout().then(loggedout => loggedout ? location.reload() : alert('Failed to logout')).catch(alert)}><Icon name='sign out'/>Logout</Dropdown.Item>
                            </Dropdown.Menu>) :
                            (<Dropdown.Menu>
                                <Dropdown.Item onClick={(e, d) => auth.login().then(loggedin => loggedin ? location.reload() : alert('Failed to login')).catch(alert)}><Icon name='sign in'/>Login</Dropdown.Item>
                            </Dropdown.Menu>)}
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </div>
        </header>
        <div className='mbb-body'>
            {!!props.session.profile && <div className='mbb-menu'>
                <Menu size='massive' inverted secondary vertical fluid>
                    <Menu.Item>
                        <Menu.Header><span className='mbb-menu-header1'>Subscription</span><span className='mbb-menu-header2'>____</span></Menu.Header>

                        <Menu.Menu>
                            <Menu.Item as={NavLink} to='/products' name='products'><span className='mbb-menu-item1'><Icon name='qrcode'/>Products</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='qrcode'/>} content='Products' position='right center' inverted/></span></Menu.Item>
                            <Menu.Item as={NavLink} to='/subscriptions' name='subscriptions'><span className='mbb-menu-item1'><Icon name='credit card alternative'/>Subscriptions</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='credit card alternative'/>} content='Subscriptions' position='right center' inverted/></span></Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header><span className='mbb-menu-header1'>System</span><span className='mbb-menu-header2'>____</span></Menu.Header>

                        <Menu.Menu>
                            <Menu.Item as={NavLink} to='/users' name='users'><span className='mbb-menu-item1'><Icon name='user'/>Users</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='user'/>} content='Users' position='right center' inverted/></span></Menu.Item>
                            <Menu.Item as={NavLink} to='/roles' name='roles'><span className='mbb-menu-item1'><Icon name='newspaper'/>Roles</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='newspaper'/>} content='Roles' position='right center' inverted/></span></Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header><span className='mbb-menu-header1'>Help</span><span className='mbb-menu-header2'>____</span></Menu.Header>

                        <Menu.Menu>
                            <Menu.Item as={NavLink} to='/document' name='document'><span className='mbb-menu-item1'><Icon name='help circle'/>Document</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='help circle'/>} content='Document' position='right center' inverted/></span></Menu.Item>
                            <Menu.Item as={NavLink} to='/about' name='about'><span className='mbb-menu-item1'><Icon name='info'/>About</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='info'/>} content='About' position='right center' inverted/></span></Menu.Item>
                            <Menu.Item as={NavLink} to='/' exact name='home'><span className='mbb-menu-item1'><Icon name='home'/>Home</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='home'/>} content='Home' position='right center' inverted/></span></Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
            </div>}
            {!!props.session.profile && <div className='mbb-content'>
                <Route path='/products' component={Product} />
                <Route path='/subscriptions' component={Subscription} />

                <Route path='/users' component={User} />
                <Route path='/roles' component={Role} />

                <Route path='/document' component={Document} />
                <Route path='/about' component={About} />

                <Route exact path='/' component={Home} />
                <Route path='/profile' component={Profile} />
            </div>}
            {!props.session.profile && <div className='mbb-content'>
                <Route exact path='/' component={Home} />
            </div>}
        </div>
    </div>
)) as any);
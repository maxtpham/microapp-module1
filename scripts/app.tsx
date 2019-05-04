import * as React from 'react';
import MasterLayout, { IMasterLayoutProps, MasterLayoutHeader, MasterLayoutContent, MasterLayoutNavbar } from '../base/scripts/master/layout'
import { Menu, Icon, Popup } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';

import DocumentHeader from "./document/header";
import DocumentContent from "./document/content";
import AboutHeader from "./about/header";
import AboutContent from "./about/content";

export default (props: IMasterLayoutProps) => (
    <MasterLayout {...props}>
        <MasterLayoutNavbar>
            <Menu.Menu>
                <Menu.Item as={NavLink} to='/document' name='document'><span className='mbb-menu-item1'><Icon name='help circle'/>Document</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='help circle'/>} content='Document' position='right center' inverted/></span></Menu.Item>
                <Menu.Item as={NavLink} to='/about' name='about'><span className='mbb-menu-item1'><Icon name='info'/>About</span><span className='mbb-menu-item2'><Popup trigger={<Icon name='info'/>} content='About' position='right center' inverted/></span></Menu.Item>
            </Menu.Menu>
        </MasterLayoutNavbar>
        <MasterLayoutHeader>
            <Route path='/document' component={DocumentHeader} />
            <Route path='/about' component={AboutHeader} />
        </MasterLayoutHeader>
        <MasterLayoutContent>
            <Route path='/document' component={DocumentContent} />
            <Route path='/about' component={AboutContent} />
        </MasterLayoutContent>
    </MasterLayout>
);
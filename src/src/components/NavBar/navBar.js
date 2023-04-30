import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import React ,{ReactDOM , useState} from 'react';
import './styles.css';
import "rsuite/dist/rsuite.css";
import { Panel, Placeholder } from 'rsuite';
const logo = require( '../../../assets/5144234.png');

const CustomNavbar = () => {
  return (
    <Navbar className='navbar_mainconatainer' >
    <Navbar.Brand  href="#" style={{display:'flex' , alignItems:'center', justifyContent:'center' , marginTop:'10 px'}} ><img src={logo} width={150} ></img></Navbar.Brand>
    <Nav className='navbar_container' vertical justified pullRight>
      
    <Panel header="Panel title" className='navbar_content' collapsible bordered>	
      <Nav.Item >Applications Software Development</Nav.Item>
      <Nav.Item>Technical Support </Nav.Item>
      <Nav.Item>Training for the users</Nav.Item>
      </Panel>
      <Nav.Menu className='navbar_content' title = "Products"  >	
      <Nav.Item>Inventory Management Module</Nav.Item>
      <Nav.Item>Sales & Customer Orders Module </Nav.Item>
      <Nav.Item>Purchasing Module</Nav.Item>
      <Nav.Item>General Ledger Module</Nav.Item>
      <Nav.Item>Accounts Payable Module </Nav.Item>
      <Nav.Item>Accounts Receivable Module </Nav.Item>
      <Nav.Item>Payroll Module </Nav.Item>
      </Nav.Menu>
      <Nav.Item className='navbar_content'>Specifications</Nav.Item>
      <Nav.Item className='navbar_content'>References</Nav.Item>
      <Nav.Item className='navbar_content'>About Us</Nav.Item>
      <Nav.Item className='navbar_content'>Contact Us</Nav.Item> 
      
        
    </Nav>
  </Navbar>
  );
};


//ReactDOM.render(<App />, document.getElementById('root'));

export {CustomNavbar};
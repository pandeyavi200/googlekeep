import React from 'react';
import logo from './logo.svg'

const Header=()=>{
   return(<> <div className="header">
      <img src={logo} alt="" width="70" height="50" />
      <span>Google Keep</span>
   </div></>);
}
export default Header;

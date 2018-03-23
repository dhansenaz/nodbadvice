import React, { Component } from 'react';
import './header.css'
import advicegraphic from './advicegraphic.png'

class Header extends Component {
  render() {
    
    return (
      <div className="header">
        <div className="middle">
            <img className="image"
            src="http://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Microsoft-Lumia-Talkman-Black-MF3-00001/PDP/en-INTL-Microsoft-Lumia-Talkman-Black-MF3-00001-Large2-desktop.jpg"></img>
            <img className="graphic" src={advicegraphic}></img>
        </div>

      </div>
    );
  }
}

export default Header;
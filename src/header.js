import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class header extends Component {
  render() {
    return (
        <div>
        <header>
		
	
        <h2 class="top">eeman<span>Halal</span> </h2>
        <ul class="forul">
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
    </ul>

</header>
</div>
    );
  }
}

export default header;

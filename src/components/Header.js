import logo from '../logo.png';
import '../App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component{
  
  render(){

    return(
      
      
        <header>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Ophelia"/>
            </Link>
        </header>

    )
  }
}





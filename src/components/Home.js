import logo from '../logo.png';
import '../App.css';
import { Component } from 'react';
import Cars from './Cars';
import Header from './Header';
import Footer from './Footer';


export default class Home extends Component{
  
  render(){

    return(

      <>
      
      <div className="App">
        <Header />

        <main>
          <div className="cars">
            <h1>Toutes les voitures</h1>
          <Cars/>
          </div>
        </main>
      </div>
      <Footer />

      </>

    )
  }
}
import '../App.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Car extends Component{
  

  render()
  
  {
    const path = `/car?${new URLSearchParams(this.props.dataDetail).toString()}`;

          return (<Link to={path} >

          <div className="car">
           
          <img className='carImage' src={this.props.dataDetail.img} />
          <h2 className="carName">{(this.props.dataDetail.name) ? this.props.dataDetail.name : <p>Veuillez patientez ... </p> }</h2>
          <p className="carDescription">{this.props.dataDetail.description}</p>

        </div>
        </Link>
) 
  
        }
        
  }
   





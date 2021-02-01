import '../App.css';
import { Component } from 'react';
import Car from './Car';


export default class Cars extends Component{
  state = {
    data : []
  }

    componentDidMount(){
      fetch('./data/cars.json')
      .then((response) => {
        return response.json()
      })
      .then((result) =>{
        setTimeout(() =>{
          this.setState({data : result});

        }, 500)
        console.log(this.state.data)
        
        
      })
  }
  render(){

    return(
      <div className="carAll">
        { this.state.data.map((dataDetail, index) => {
          
          return <Car key={index} dataDetail={dataDetail}  />


        })}
        

      </div>

    )
  }
}


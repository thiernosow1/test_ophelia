import logo from './logo.png';
import './App.css';
import { Component } from 'react';
import Cars from './components/Cars';
import Car from './components/Car';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams

} from "react-router-dom";
import CarView from './components/CarView';


export default class App extends Component{
  
  render(){
    const params =[
      "name",
    "description",
    "img",
    "marque",
    "annees-de-production",
    "production",
    "classe",
    "usine-s-dassemblage",
    "energie",
    "moteur-s",
    "position-du-moteur",
    "cylindree",
    "puissance-maximale",
    "couple-maximal",
    "transmission",
    "boite-de-vitesses",
    "poids-a-vide",
    "vitesse-maximale",
    "acceleration",
    "consommation-mixte",
    "emission-de-co2",
    "carrosserie-s" 
    ]

    const path ="/car?"+params.map(e => `${e}=:${e}`).join('&');

    return(
      
      <Router>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/cars" component={Cars} />
            <Route  path="/car" component={CarView} />

            <Route path="*" component={() => <p className="notFound">La page que vous recherchez n'existe pas</p>} />
          </Switch>
        </div>
      </Router>

    )
  }
}
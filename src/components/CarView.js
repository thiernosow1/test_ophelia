import '../App.css';
import { Component } from 'react';
import {useParams, useLocation} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function CarView(){

    let query = useQuery()
    let dataDetail= useParams();
 
          return (<> <Header />
          <div className="productCar">
           <div className="productCarHead">
            
            <h2 className="productCarName">{(query.get("name")) ? query.get("name") : <p>Veuillez patientez ... </p> }</h2>
            <p className="productCarDescription">{query.get("description")}</p>
            <img className='productCarImg' src={query.get("img")} />
          </div>

          <ul className="productCarDetails" >
            <li><span className="detailName">Marque : </span>{query.get("marque")}</li>
            <li><span className="detailName">Annees de production : </span>{query.get("annees-de-production")}</li>
            <li><span className="detailName">Production </span>{query.get("production")}</li>
            <li><span className="detailName">Classe : </span>{query.get("classe")}</li>
            <li><span className="detailName">Usine d'emballage : </span>{query.get("usine-s-dassemblage")}</li>
            <li><span className="detailName">Energie : </span>{query.get("energie")}</li>
            <li><span className="detailName">Moteur : </span>{query.get("moteur-s")}</li>
            <li><span className="detailName">Position du moteur : </span>{query.get("position-du-moteur")}</li>
            <li><span className="detailName">Cylindrée : </span>{query.get("cylindree")}</li>
            <li><span className="detailName">Puissance maximale : </span>{query.get("puissance-maximale")}</li>
            <li><span className="detailName">Couple maximal : </span>{query.get("couple-maximal")}</li>
            <li><span className="detailName">Transmission : </span>{query.get("transmission")}</li>
            <li><span className="detailName">Boite de vitesse : </span>{query.get("boite-de-vitesses")}</li>
            <li><span className="detailName">Poids à vide : </span>{query.get("poids-a-vide")}</li>
            <li><span className="detailName">Vitesse maximale : </span>{query.get("vitesse-maximale")}</li>
            <li><span className="detailName">Acceleration : </span>{query.get("acceleration")}</li>
            <li><span className="detailName">Consommation Mixte : </span>{query.get("consommation-mixte")}</li>
            <li><span className="detailName">Emission de CO2 : </span>{query.get("emission-de-co2")}</li>
            <li><span className="detailName">Carrosserie : </span>{query.get("carrosserie-s")}</li>

          </ul>
          
        </div>

        <Footer />
        </>
) 
          
        

        }







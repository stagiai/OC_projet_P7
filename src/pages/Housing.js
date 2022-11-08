import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import Slideshow from '../components/Slideshow'
import {housingList} from '../datas/housingList';
import HousingCSS from '../styles/Housing.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collapse from '../components/Collapse'
import host from '../assets/host.jpg'
import Rating from '../components/Rating'


const Housing = () => {

    const title1= 'Description';
    const title2= 'Equipements';
    
    const {cardID} = useParams();

    const housing = housingList.find((housing) => housing.id === cardID);

    return !housing ? <Navigate to= '/error' /> : 
        <div className= {HousingCSS.housing} >
            <Header />
            <Slideshow housing= {housing}/>
            <div className= {HousingCSS.main} >
                <div className= {HousingCSS.mainTitle} >
                    <h2 className= {HousingCSS.title} >{housing.title}</h2>
                    <h4 className= {HousingCSS.location} >{housing.location}</h4>
                    <div className= {HousingCSS.tags} >{
                        housing.tags.map((item) => 
                            <li  className= {HousingCSS.tagsItem}>{item}</li>
                        )
                    }</div>
                </div>
                <div className= {HousingCSS.mainHost} >
                    <div className= {HousingCSS.host}>
                        <div className= {HousingCSS.hostName} >{housing.host.name}</div>
                        <div className= {HousingCSS.hostImg}><img src= {host}  alt= 'host'/></div>                        
                    </div>
                    <div className= {HousingCSS.rating}><Rating rating={housing.rating} /></div>
                </div>
            </div>
            <div className= {HousingCSS.details} >
                <Collapse title= {title1} content ={housing.description} />


                <Collapse title={title2} content= 
                    {<div className= {HousingCSS.list}>{
                        housing.equipments.map((item) => 
                            <li>{item}</li>
                        )
                    }</div> }        
                  />

            </div>           
            <Footer />
        </div>        
};
export default Housing;
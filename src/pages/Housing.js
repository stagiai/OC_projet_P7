import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import Carousel from '../components/Carousel'
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
            <Carousel housing= {housing}/>
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
                        <div className= {HousingCSS.left}></div>
                        <div className= {HousingCSS.hostName} >{housing.host.name}</div>
                        <img src= {host}  className= {HousingCSS.hostImg} alt= 'host'/>
                    </div>
                    <div className= {HousingCSS.rating}><Rating rating={housing.rating} /></div>
                </div>
            </div>
            <div className= {HousingCSS.details} >
                <Collapse title= {<h4 className={HousingCSS.descriptionTitle}>{title1}</h4>} content ={
                <p className={HousingCSS.description}>{housing.description}</p>} />


                <Collapse title={<h4 className={HousingCSS.equipmentTitle}>{title2}</h4>} content= {
                    <ul className= {HousingCSS.equipments}>
                        {housing.equipments.map((item) =>
                            <li>{item}</li>)
                        }           
                    </ul>
                }  />

            </div>           
            <Footer />
        </div>        
};
export default Housing;
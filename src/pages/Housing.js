import React from 'react';
import {useParams} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
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
//    const navigate = useNavigate();

    const housing = housingList.find((housing) => housing.id === cardID);
//    if (!housing) {
//        navigate("/error");
//     }
    console.log(housing.tags);
    return (
        <div className= {HousingCSS.housing} >
            <Header />
            <Carousel housing= {housing}/>
            <div className= {HousingCSS.main} >
                <div className= {HousingCSS.mainTitle} >
                    <h2 className= {HousingCSS.title} >{housing.title}</h2>
                    <h4 className= {HousingCSS.location} >{housing.location}</h4>
                    <ul className= {HousingCSS.tags} >{
                        housing.tags.map((item) => {
                            <li>{item}</li>
                        })
                    }</ul>
                </div>
                <div className= {HousingCSS.mainHost} >
                    <div className= {HousingCSS.host}>
                        <div className= {HousingCSS.left}></div>
                        <div className= {HousingCSS.hostName} >{housing.host.name}</div>
                        <img src= {host} className= {HousingCSS.hostImg} />
                    </div>
                    <div className= {HousingCSS.rating}><Rating rating={housing.rating} /></div>
                </div>
            </div>
            <div className= {HousingCSS.details} >
                <div className= {HousingCSS.collapse}>
                    <Collapse title={title1} text= {housing.description}   />
                </div>
                <div className= {HousingCSS.collapse}>
                    <Collapse title={title2} text= {housing.equipments}  />
                </div>


            </div>           
            <Footer />
        </div>

    )

};
export default Housing;
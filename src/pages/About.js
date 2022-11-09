import about_maskgroup from '../assets/about-maskgroup.jpg'
import Collapse from '../components/Collapse'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutCSS from '../styles/About.module.css'


const title1= 'Fiabilité';
const title2= 'Respect';
const title3= 'Service';
const title4= 'Responsabilité';

const text1= 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
const text2= 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
const text3= "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const text4= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En faisant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les starndards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";


const About =() => (
    <div>


        <div className= {AboutCSS.about} >
            <Header />
            <div className= {AboutCSS.aboutMaskGroup} style={{backgroundImage:`url(${about_maskgroup})`}}>

            </div>
            <div className= {AboutCSS.details} >
                <Collapse title= {title1} content= {text1}/>
                <Collapse title= {title2} content= {text2}/>
                <Collapse title= {title3} content= {text3}/>
                <Collapse title= {title4} content= {text4}/>
            </div>

        </div>
        <Footer />
    </div>

);
export default About;
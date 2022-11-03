import about_maskgroup from '../assets/about-maskgroup.jpg'
import Collapse from '../components/Collapse'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutCSS from '../styles/About.module.css'


const title1= 'Fiabilité';
const title2= 'Respect';
const title3= 'Service';
const title4= 'Responsabilité';

const text1= 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
const text2= 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
const text3= 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
const text4= 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';


const About =() => (
    <div className= {AboutCSS.about} >
        <Header />
        <div className= {AboutCSS.aboutMaskGroup} style={{backgroundImage:`url(${about_maskgroup})`}}>

        </div>
        <div className= {AboutCSS.details} >
            <Collapse title= {title1} text= {text1}/>
            <Collapse title= {title2} text= {text2}/>
            <Collapse title= {title3} text= {text3}/>
            <Collapse title= {title4} text= {text4}/>
        </div>
        <Footer />
    </div>


);
export default About;
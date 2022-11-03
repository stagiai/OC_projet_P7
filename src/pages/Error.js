import {Link} from 'react-router-dom';
import ErrorCSS from '../styles/Error.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Error = () => {
    return (
    <div className= {ErrorCSS.error} >
        <Header />
        <h1 className= {ErrorCSS.errorCode} >404</h1>
        <p className= {ErrorCSS.errorMessage} >Oups! La page que vous demandez n'existe pas</p>
        <Link to ='/' className= {ErrorCSS.link} >Retourner à la page d'accueil</Link>
        <Footer />
    </div>
    )
};

export default Error;
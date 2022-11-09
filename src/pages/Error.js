import {Link} from 'react-router-dom';
import ErrorCSS from '../styles/Error.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Error = () => {
    return (
        <div>
            <div className= {ErrorCSS.error} >
                <Header />
                <div className= {ErrorCSS.code} >404</div>
                <p className= {ErrorCSS.message} >Oups! La page que vous demandez n'existe pas</p>
                <Link to ='/'  className= {ErrorCSS.link}>Retourner à la page d'accueil</Link>

            </div>
            <Footer />
        </div>
    )
};

export default Error;
import {Link} from 'react-router-dom';
import '../styles/Error.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Error = () => {
    return (
    <div className='error'>
        <Header />
        <h1 className='errorCode'>404</h1>
        <p className='errorMessage'>Oups! La page que vous demandez n'existe pas</p>
        <Link to ='/' className='link'>Retourner à la page d'accueil</Link>
        <Footer />
    </div>
    )
}

export default Error;
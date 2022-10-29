import {Link} from 'react-router-dom';
import '../styles/Error.css'

const Error = () => {
    return (
    <section>
        <h1 className='error'>404</h1>
        <p className='message'>Oups! La page que vous demandez n'existe pas</p>
        <Link to ='/' className='link'>Retourner à la page d'accueil</Link>
    </section>
    )
}

export default Error;
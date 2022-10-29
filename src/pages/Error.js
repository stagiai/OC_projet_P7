import {Link} from 'react-router-dom';

const Error = () => {
    return (
    <section>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <Link to ='/'>Retourner à la page d'accueil</Link>
    </section>
    )
}

export default Error;
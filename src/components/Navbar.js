import {Link} from 'react-router-dom';
import '../styles/SharedLayout.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Accueil</Link>
            <Link to='/about'>A Propos</Link>
        </div>
    );
};

export default Navbar;
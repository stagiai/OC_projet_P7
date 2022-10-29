import {Link} from 'react-router-dom';
import '../styles/Header.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className='navbar'>
                <Link to='/' className='home'>Accueil</Link>
                <Link to='/about' className='about'>A Propos</Link>
            </nav>
        </div>

    );
};

export default Navbar;
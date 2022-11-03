import {Link} from 'react-router-dom';
import logo_header from '../assets/logo_header.png'
import HeaderCSS from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={HeaderCSS.header} >
            <img src= {logo_header} alt= 'logo de Kasa' className={HeaderCSS.logo}/>
            <div className={HeaderCSS.navbar}>
                <Link to='/' className= {HeaderCSS.title} >Accueil</Link>
                <Link to='/about' className={HeaderCSS.title} >A Propos</Link>
            </div>
        </div>

    )
};

export default Header;
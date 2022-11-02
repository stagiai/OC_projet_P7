import Navbar from './Navbar'
import logo_header from '../assets/logo_header.png'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src= {logo_header} alt= 'logo de Kasa' className='logo'/>
            <Navbar />
        </div>

    )
};

export default Header;
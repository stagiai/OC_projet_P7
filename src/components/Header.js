import Navbar from './Navbar'
import logo from '../assets/logo.png'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src= {logo} alt= 'logo de Kasa' className='logo'/>
            <Navbar />
        </div>

    )
};

export default Header;
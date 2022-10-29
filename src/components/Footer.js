import logo_footer from '../assets/logo_footer.png'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src= {logo_footer} alt= 'logo de Kasa' className='logo-footer'/>
            <p className='rights'>2020 Kasa. All rights reserved</p>
        </div>

    )
};

export default Footer;
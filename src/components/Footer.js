import logo_footer from '../assets/logo_footer.png'
import '../styles/SharedLayout.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src= {logo_footer} alt= 'logo de Kasa' className='footerLogo'/>
            </div>
            <p className='text'>2020 Kasa. All rights reserved</p>
        </div>

    )
};

export default Footer;
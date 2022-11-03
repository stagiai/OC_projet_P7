import logo_footer from '../assets/logo_footer.png'
import FooterCSS from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className= {FooterCSS.footer} >

            <img src= {logo_footer} alt= 'logo de Kasa' className= {FooterCSS.logo} />
            <p className= {FooterCSS.text} >2020 Kasa. All rights reserved</p>
        </div>

    )
};

export default Footer;
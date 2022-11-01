import '../styles/Home.css'
import home_maskgroup from '../assets/home_maskgroup.png'

const HomeMaskgroup = () => {
    return (
        <section className='section'>
            <img src={home_maskgroup} alt= 'fond du titre' className='home-maskgroup' />
            <p className='title'>Chez vous, partout et ailleurs</p>
        </section>
    )
};

export default HomeMaskgroup;
import '../styles/Body.css'
import maskgroup from '../assets/maskgroup.png'

const Title = () => {
    return (
        <section className='section'>
            <img src={maskgroup} alt= 'fond du titre' className='maskgroup' />
            <p className='title'>Chez vous, partout et ailleurs</p>
        </section>
    )
};

export default Title
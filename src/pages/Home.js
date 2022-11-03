import Gallery from '../components/Gallery'
import {housingList} from '../datas/housingList'
import home_maskgroup from '../assets/home-maskgroup.jpg'
import HomeCSS from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Home =() => {

    return (
        <div className= {HomeCSS.home} >
            <Header />
            <div className= {HomeCSS.homeMaskGroup} style={{backgroundImage:`url(${home_maskgroup})`}}>
                <h1 className= {HomeCSS.title} >Chez vous, partout et ailleurs</h1>
            </div>
            <Gallery list = {housingList} />
            <Footer />
        </div>
    )
};
export default Home;
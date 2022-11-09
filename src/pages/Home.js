import Gallery from '../components/Gallery'
import {housingList} from '../datas/housingList'
import home_maskgroup from '../assets/home-maskgroup.jpg'
import HomeCSS from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Home =() => {

    const text1 = 'Chez vous, ';
    const text2 = 'partout et ailleurs'

    return (
        <div>
            <div className= {HomeCSS.home} >
                <Header />
                <div className= {HomeCSS.homeMaskGroup} style={{backgroundImage:`url(${home_maskgroup})`}}>
                    <div  className= {HomeCSS.left}>
                        <p  className= {HomeCSS.title}>{`${text1}${text2}`}</p>
                    </div>
                    <div  className= {HomeCSS.center}></div>
                </div>
                <Gallery list = {housingList} className = {HomeCSS.gallery}/>

            </div>
            <Footer />
        </div>
    )
};
export default Home;
import Gallery from '../components/Gallery'
import {housingList} from '../datas/housingList'
import home_maskgroup from '../assets/home-maskgroup.jpg'



const Home =() => (
    <div className='body'>
        <div className='homeMaskGroup' style={{backgroundImage:`url(${home_maskgroup})`}}>
            <h1 className='title'>Chez vous, partout et ailleurs</h1>
        </div>
        <Gallery list = {housingList} />
    </div>


);
export default Home;
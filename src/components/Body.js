import '../styles/Home.css'
import '../styles/Gallery.css'
import HomeMaskgroup from './HomeMaskgroup'
import Gallery from './Gallery'
import {housingList} from '../datas/housingList'

const Body = () => {
    return (
    <div className="body">
        <HomeMaskgroup />
        <Gallery list = {housingList} />
    </div>
    )

};

export default Body;
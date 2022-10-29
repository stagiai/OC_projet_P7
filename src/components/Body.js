import '../styles/Body.css'
import '../styles/Gallery.css'
import Title from './Title'
import Gallery from './Gallery'
import {housingList} from '../datas/housingList'

const Body = () => {
    return (
    <div className="body">
        <Title />
        <Gallery list = {housingList} />
    </div>
    )

};

export default Body;
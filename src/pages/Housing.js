import {useParams} from 'react-router-dom'
import Carousel from '../components/Carousel';
import {housingList} from '../datas/housingList';
import '../styles/Housing.css'


const Housing = () => {
    const {cardID} = useParams();
    const housing = housingList.find((housing) => housing.id === cardID);
    console.log(housing);
    return (
        <div className='housing'>
            <Carousel housing= {housing}/>
            <h1>{housing.title}</h1>
            <h4>{housing.host.name}</h4>
            <h4>{housing.location}</h4>
            <p>{housing.tags}</p>
            <p>{housing.rating}</p>
            <p>{housing.description}</p>
            <p>{housing.equipments}</p>
            <h1>{cardID}</h1>
        </div>

    )

};
export default Housing;
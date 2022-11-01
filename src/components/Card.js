import '../styles/Gallery.css'
import {Link} from 'react-router-dom';


const Card = (props) => {
    const cardID = props.card.id;

    return (
        <Link to= {`/${cardID}`} className='card' >
            <p className='card-title'>{props.card.title}</p>
        </Link>
    )



    };

export default Card;
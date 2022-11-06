import CardCSS from '../styles/Card.module.css'
import {Link} from 'react-router-dom';


const Card = (props) => {
    const cardID = props.card.id;

    return (

    <Link to= {`/${cardID}`} className= {CardCSS.card} >
        <p className= {CardCSS.title}>{props.card.title}</p>
    </Link>


    )



    };

export default Card;
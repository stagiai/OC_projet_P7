import { FaStar} from 'react-icons/fa'

import RatingCSS from '../styles/Rating.module.css'

const Rating = (props) => {
    const rating = props.rating;
    const range= [1, 2, 3, 4, 5];
    return (
        <div>
            {range.map((rangeElem) =>
                rating >= rangeElem ? <span key={rangeElem.toString()}><FaStar className= {RatingCSS.rating}  /></span> : <span key={rangeElem.toString()}><span></span><FaStar className= {RatingCSS.notRating}  /></span>
            )}
        </div>
    )
};

export default Rating;

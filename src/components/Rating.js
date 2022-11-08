import { Icon } from '@iconify/react';
import starSharp from '@iconify/icons-ion/star-sharp';

import RatingCSS from '../styles/Rating.module.css'

const Rating = (props) => {
    const rating = props.rating;
    const range= [1, 2, 3, 4, 5];
    return (
        <div>
            {range.map((rangeElem) =>
                rating >= rangeElem ? <span key={rangeElem.toString()}><Icon icon={starSharp} className= {RatingCSS.rating}  /></span> : <span key={rangeElem.toString()}><span></span><Icon icon={starSharp} className= {RatingCSS.notRating}  /></span>
            )}
        </div>
    )
};

export default Rating;

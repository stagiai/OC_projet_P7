import '../styles/Home.css'
import Card from './Card'

const Gallery = (props) => (

    <div className='gallery'>
        {props.list.map((card) => (
            <Card key= {card.id} card= {card} />
        ))}
    </div>
);

export default Gallery;
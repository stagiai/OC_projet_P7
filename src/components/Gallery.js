import GalleryCSS from '../styles/Gallery.module.css'
import Card from './Card'

const Gallery = (props) => (

    <div className= {GalleryCSS.gallery}>
        {props.list.map((card) => (
            <Card key= {card.id} card= {card} />
        ))}
    </div>
);

export default Gallery;
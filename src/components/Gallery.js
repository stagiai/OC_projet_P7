import GalleryCSS from '../styles/Gallery.module.css'
import Card from './Card'

const Gallery = (props) => (



    <div className= {GalleryCSS.gallery}>
        {props.list.map((card) => (
            <div  className= {GalleryCSS.card}>
                <Card key= {card.id} card= {card}  />
            </div>
            
        ))}
    </div>

);

export default Gallery;
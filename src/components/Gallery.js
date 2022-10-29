import '../styles/Gallery.css'
import Item from './Item'

const Gallery = (props) => (

    <div className='gallery'>
        {props.list.map((item) => (
            <Item key={item.id} item={item} />
        ))}
    </div>
);

export default Gallery;
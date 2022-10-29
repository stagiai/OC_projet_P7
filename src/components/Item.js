import '../styles/Gallery.css'

const Item = (props) => (
        <div className='item'>
            <p className='item-title'>{props.item.title}</p>
        </div>
);

export default Item;
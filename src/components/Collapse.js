import { useState } from "react";
import '../styles/Collapse.css'
import vector_open from '../assets/vector-to-open.png'
//import vector_close from '../assets/vector-to-close.png'

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="description">
          <div className="head">
            <h1 className="title">{props.title}</h1>
            <div className="right" onClick={handleOpen}><img src= {vector_open} className='vector'  /></div>
          </div>
          {open ? <div className="text">{props.text}</div> : null}
      </div>
    );
  };
  
  export default Collapse;
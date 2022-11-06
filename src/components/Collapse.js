import { useState } from "react";
import CollapseCSS from '../styles/Collapse.module.css'
import vector_open from '../assets/vector-to-open.png'
import vector_close from '../assets/vector-to-close.png'
//import vector_close from '../assets/vector-to-close.png'

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className= {CollapseCSS.description}>
          <div className= {CollapseCSS.head}>
            <div className={CollapseCSS.title}  >{props.title}</div>
            <div className= {CollapseCSS.right} onClick={handleOpen}>
              {!open ? <img src= {vector_open} className= {CollapseCSS.vector}  />
              : <img src= {vector_close} className= {CollapseCSS.vector}  />}
            </div>
          </div>
          {open ? <div>{props.content}</div> : null}
      </div>
    );
  };
  
  export default Collapse;
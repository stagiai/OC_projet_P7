import { useState } from "react";
import CollapseCSS from '../styles/Collapse.module.css'
import vector_open from '../assets/vector-to-open.png'
import vector_close from '../assets/vector-to-close.png'

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className= {CollapseCSS.description}>
          <div className= {CollapseCSS.titleContainer}>
            <div className={CollapseCSS.title}  >{props.title}</div>
            <div className= {CollapseCSS.right} onClick={handleOpen}>
              {!open ? <img src= {vector_open} alt= 'arrow downward' className= {CollapseCSS.vector}  />
              : <img src= {vector_close} alt= 'arrow upward' className= {CollapseCSS.vector}  />}
            </div>
          </div>
          <div className= {CollapseCSS.contentContainer}  >
            {open ? <div className={CollapseCSS.content}>{props.content}</div> : null}
          </div>
      </div>
    );
  };
  
  export default Collapse;
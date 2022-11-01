import { useState } from "react";
import '../styles/About.css'
import vector_open from '../assets/vector-to-open.png'
//import vector_close from '../assets/vector-to-close.png'

const Collapse = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
    const Respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
  
    return (
      <div className="rule">
          <div className="theme">
            <h1>Respect</h1>
            <button onClick={handleOpen}><img src= {vector_open} /></button>
          </div>
          {open ? <div className="text">{Respect }</div> : null}
      </div>
    );
  };
  
  export default Collapse;
import React, {useState} from 'react'
import SlideshowCSS from '../styles/Slideshow.module.css'
import arrowforward from '../assets/arrowforward.png'
import arrowbackward from '../assets/arrowbackward.png'

function Slideshow(props) {
    const [currImg, setCurrImg] = useState(0);
    if(props.housing.pictures.length <=1) {
        return (
            <div className= {SlideshowCSS.carousel} >
                <div className= {SlideshowCSS.carouselInner}
                    style= {{backgroundImage:`url(${props.housing.cover})`}}>
                </div>
            </div>
        )

    } else {

        return (
            <div className= {SlideshowCSS.carousel}>
                <div className= {SlideshowCSS.carouselInner}
                    style= {{backgroundImage:`url(${props.housing.pictures[currImg]})`}}>
                        <div className= {SlideshowCSS.left} onClick={() => {
                            if (currImg === 0) {
                                setCurrImg(props.housing.pictures.length-1);
                            } else {
                                setCurrImg(currImg-1);
                            }
    
                        }}>
                            <img src= {arrowbackward} alt= 'backward arrow' className= {SlideshowCSS.arrowbackward} />
                        </div>
                        <div className= {SlideshowCSS.center}></div>
                        <div className= {SlideshowCSS.right} onClick={() => {
                            if (currImg === props.housing.pictures.length-1) {
                                setCurrImg(0);
                            } else {
                                setCurrImg(currImg+1);
                            }
    
                        }}>
                            <img src= {arrowforward} alt= 'forward arrow' className= {SlideshowCSS.arrowforward}/>
                        </div>
                </div>
                
            </div>
        )
    }
};

export default Slideshow;
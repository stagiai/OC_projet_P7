import React, {useState} from 'react'
import CarouselCSS from '../styles/Carousel.module.css'
import arrowforward from '../assets/arrowforward.png'
import arrowbackward from '../assets/arrowbackward.png'

function Carousel(props) {
    const [currImg, setCurrImg] = useState(0);
    if(props.housing.pictures.length <=1) {
        return (
            <div className= {CarouselCSS.carousel} >
                <div className= {CarouselCSS.carouselInner}
                    style= {{backgroundImage:`url(${props.housing.cover})`}}>
                </div>
            </div>
        )

    } else {

        return (
            <div className= {CarouselCSS.carousel}>
                <div className= {CarouselCSS.carouselInner}
                    style= {{backgroundImage:`url(${props.housing.pictures[currImg]})`}}>
                        <div className= {CarouselCSS.left} onClick={() => {
                            if (currImg === 0) {
                                setCurrImg(props.housing.pictures.length-1);
                            } else {
                                setCurrImg(currImg-1);
                            }
    
                        }}>
                            <img src= {arrowbackward} alt= 'backward arrow' className= {CarouselCSS.arrowbackward} />
                        </div>
                        <div className= {CarouselCSS.center}></div>
                        <div className= {CarouselCSS.right} onClick={() => {
                            if (currImg === props.housing.pictures.length-1) {
                                setCurrImg(0);
                            } else {
                                setCurrImg(currImg+1);
                            }
    
                        }}>
                            <img src= {arrowforward} alt= 'forward arrow' className= {CarouselCSS.arrowforward}/>
                        </div>
                </div>
                
            </div>
        )
    }
};

export default Carousel;
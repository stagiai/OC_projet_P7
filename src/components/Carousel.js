import React, {useState} from 'react'
import '../styles/Housing.css'
import arrowforward from '../assets/arrowforward.png'
import arrowbackward from '../assets/arrowbackward.png'

function Carousel(props) {
    const [currImg, setCurrImg] = useState(0);
    if(props.housing.pictures.length <=1) {
        return (
            <div className='carousel'>
                <div className='carouselInner'
                    style= {{backgroundImage:`url(${props.housing.cover})`}}>
                </div>
            </div>
        )

    } else {

        return (
            <div className='carousel'>
                <div className='carouselInner'
                    style= {{backgroundImage:`url(${props.housing.pictures[currImg]})`}}>
                        <div className='left' onClick={() => {
                            if (currImg === 0) {
                                setCurrImg(props.housing.pictures.length-1);
                            } else {
                                setCurrImg(currImg-1);
                            }
    
                        }}>
                            <img src= {arrowbackward} alt= 'backward arrow'/>
                        </div>
                        <div className='center'></div>
                        <div className='right' onClick={() => {
                            if (currImg === props.housing.pictures.length-1) {
                                setCurrImg(0);
                            } else {
                                setCurrImg(currImg+1);
                            }
    
                        }}>
                            <img src= {arrowforward} alt= 'forward arrow'/>
                        </div>
                </div>
                
            </div>
        )
    }
};

export default Carousel;
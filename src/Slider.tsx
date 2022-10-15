import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Props {
  autoplay: boolean,
  canSwipe: boolean,
  arrows: boolean,
  images: {
    url: string;
    id: string;
  }[]
}

const Slider: React.FC<Props> = (props) => {

  return (
    <div className="slide-container">
      <Slide autoplay={props.autoplay} transitionDuration={200} arrows={props.arrows} canSwipe={props.canSwipe}>
        {props.images.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImage.url})`}}>

            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default Slider;

import './slider.css';
import React from 'react';
import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
 
class Slider extends React.Component {
  render() {
    return(
        <div className="grid-container slider-content">
             <ImageGallery items={images} />
        </div>
    ) 
  }
}

export default Slider;
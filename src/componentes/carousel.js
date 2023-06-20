import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import promo1 from '../img/promo1.jpg';
import promo2 from '../img/promo2.JPG';
import promo3 from '../img/promo3.jpg';

function CustomCarousel() {
    return (
        <div className='carousel'>
            <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                        className="promos"
                        src= {promo1}
                        alt="Imagen 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                         className="promos"
                        src= {promo2}
                        alt="Imagen 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="promos"
                        src= {promo3}
                        alt="Imagen 3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CustomCarousel;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carrucel = () => {
    const media = [
        'Galery/1.jpg',
        'Galery/2.jpg',
        'Galery/3.jpg',
        'Galery/4.jpg',
        'Galery/5.jpg',
        'Galery/6.jpg',
        'Galery/7.jpg',
        'Galery/8.jpg',
    ];

    return (
        <div className="w-[500px] h-[400px] md:w-[700px] md:h-[600px] overflow-hidden"> 
            <Carousel className="w-full h-full">
                {media.map((src, index) => (
                    <Carousel.Item key={index} className="w-full h-full">
                        <img 
                            src={src} 
                            alt={`Slide ${index}`} 
                            className="w-full h-full object-cover rounded-lg" 
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

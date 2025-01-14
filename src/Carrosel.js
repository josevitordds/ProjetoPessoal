import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from "../src/imgs/img1.jpeg"
import img2 from "../src/imgs/img2.jpeg"
import img3 from "../src/imgs/img3.jpeg"
import img4 from "../src/imgs/img4.jpeg"
import img5 from "../src/imgs/img5.jpeg"
import img6 from "../src/imgs/img6.jpeg"
import img7 from "../src/imgs/img7.jpeg"
import img8 from "../src/imgs/img8.jpeg"
import img9 from "../src/imgs/img9.jpeg"
import img10 from "../src/imgs/img10.jpeg"
import img11 from "../src/imgs/img11.jpeg"
import img12 from "../src/imgs/img12.jpeg"
import img13 from "../src/imgs/img13.jpeg"
import img14 from "../src/imgs/img14.jpeg"
import 'swiper/css';
import 'swiper/css/navigation';
import '../src/carrossel.css'


function Carrossel(){
    const images =[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
    return(<>
  <div className='carrossel'>
      <Swiper 
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{height:"70vh"}}>
            <img className='imgs'
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>);
}


export default Carrossel;
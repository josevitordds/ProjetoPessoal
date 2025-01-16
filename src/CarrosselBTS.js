import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from "../src/imgs/img15.png"
import img2 from "../src/imgs/img16.jpg"
import img3 from "../src/imgs/img17.jpg"
import img4 from "../src/imgs/img18.jpeg"
import img5 from "../src/imgs/img19.jpg"
import img6 from "../src/imgs/img20.jpg"
import img7 from "../src/imgs/img21.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import '../src/carrossel.css'


function CarrosselBTS(){
    const images =[img1, img2, img3, img4, img5, img6, img7];
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
          <SwiperSlide key={index} className='swiperConf'>
            <img className='imgs'
              src={image}
              alt={`Slide ${index + 1}`}
              style={{height:'100%', width: '100%', borderRadius: '8px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>);
}


export default CarrosselBTS;
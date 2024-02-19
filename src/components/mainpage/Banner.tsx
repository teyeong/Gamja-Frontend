// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import banner from '../../assets/images/banner.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Banner() {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide onClick={() => navigate('/success/1')}>
          <img src={banner} />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate('/success/2')}>
          <img src={banner} />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate('/success/3')}>
          <img src={banner} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

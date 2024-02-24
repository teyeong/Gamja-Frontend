// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import Banner from '../_common/Banner';

import banner from '../../assets/images/banner.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function MainBanner() {
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
          <Banner
            image={banner}
            title="다시: 시니어 전문가 인재풀"
            content="다시가 선별한 시니어 전문가들을 만나보세요!"
            subContent="당신을 위한 시니어 전문가 인재풀 다시"
            styleClass="banner-main"
          />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate('/success/2')}>
          <Banner
            image={banner}
            title="다시: 시니어 전문가 인재풀"
            content="다시가 선별한 시니어 전문가들을 만나보세요!"
            subContent="당신을 위한 시니어 전문가 인재풀 다시"
            styleClass="banner-main"
          />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate('/success/3')}>
          <Banner
            image={banner}
            title="다시: 시니어 전문가 인재풀"
            content="다시가 선별한 시니어 전문가들을 만나보세요!"
            subContent="당신을 위한 시니어 전문가 인재풀 다시"
            styleClass="banner-main"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

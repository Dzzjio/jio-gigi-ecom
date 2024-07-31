import React from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperContainer, SponsorItem } from './styled';

//images
import Nvidia from '../../assets/Images/nvidia-logo.png'
import AMD from '../../assets/Images/amd-logo.png';
import Corsair from '../../assets/Images/corsait-logo.jpg';
import ROG from '../../assets/Images/rog-logo.png';
import MSI from '../../assets/Images/MSI-Logo.jpg';
import EVGA from '../../assets/Images/evga-logo.png';

const SponsorSlider = () => {
  React.useEffect(() => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { clickable: true },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <SwiperContainer>
      <div className="swiper">
      <div className="swiper-wrapper">
          <div className="swiper-slide"><SponsorItem><img src={Nvidia} alt="Nvidia logo" /></SponsorItem></div>
          <div className="swiper-slide"><SponsorItem><img src={AMD} alt="AMD logo" /></SponsorItem></div>
          <div className="swiper-slide"><SponsorItem><img src={Corsair} alt="Corsair logo" /></SponsorItem></div>
          <div className="swiper-slide"><SponsorItem><img src={ROG} alt="Asus logo" /></SponsorItem></div>
          <div className="swiper-slide"><SponsorItem><img src={MSI} alt="MSI logo" /></SponsorItem></div>
          <div className="swiper-slide"><SponsorItem><img src={EVGA} alt="EVGA logo" /></SponsorItem></div>
        </div>
        {/* Swiper Navigation */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {/* Swiper Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </SwiperContainer>
  );
};

export default SponsorSlider;

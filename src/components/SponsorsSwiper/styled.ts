import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 100%;
  position: relative;

  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #007bff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .swiper-button-next {
    right: 15px;
  }

  .swiper-button-prev {
    left: 15px;
  }

  .swiper-pagination {
    bottom: 10px;
    text-align: center;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background: #007bff;
  }

  @media (max-width: 1024px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 40px;
      height: 40px;
    }

    .swiper-slide {
      padding: 15px;
    }
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 35px;
      height: 35px;
    }

    .swiper-slide {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 30px;
    }

    .swiper-slide {
      padding: 5px;
    }
  }

  @media (max-width: 480px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

// Styled item for sponsors
export const SponsorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px;

  & > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    & > img {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 768px) {
    & > img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    & > img {
      width: 50px;
      height: 50px;
    }
  }
`;

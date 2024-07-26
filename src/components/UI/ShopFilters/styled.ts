import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 auto;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

export const PriceSliderContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  
  .rc-slider {
    margin: 0;
  }
  
  .rc-slider-track {
    background: #007bff;
  }
  
  .rc-slider-handle {
    background: #007bff;
    border: 2px solid #fff;
  }
`;

export const SliderLabel = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;

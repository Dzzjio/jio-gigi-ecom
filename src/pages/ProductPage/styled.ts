import styled from "styled-components";

export const ProductDetailContainer = styled.div`
display: flex;
padding: 20px;
`;

export const ProductImage = styled.div`
flex: 1;
img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
`;

export const ProductInfo = styled.div`
flex: 1;
padding-left: 20px;

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}
`;

export const BuySection = styled.div`
margin-top: 20px;

button {
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f0f0f0;

  &:hover {
    background-color: #e0e0e0;
  }
}
`;

// export const Section = styled.section`
//   color: #4a5568;
//   font-family: 'body-font';
//   overflow: hidden;
// `;

// export const Container = styled.div`
//   padding: 6rem 1.25rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const FlexWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 80%;
//   margin: 0 auto;
// `;

// export const Img = styled.img`
//   width: 100%;
//   max-width: 50%;
//   height: auto;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 0.25rem;
// `;

// export const Content = styled.div`
//   max-width: 50%;
//   padding: 1.5rem 2.5rem;
//   margin-top: 1.5rem;

//   @media (min-width: 1024px) {
//     padding: 0 2.5rem 0 0;
//     margin-top: 0;
//   }
// `;

// export const BrandName = styled.h2`
//   font-size: 0.875rem;
//   color: #a0aec0;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
// `;

// export const ProductTitle = styled.h1`
//   color: #1a202c;
//   font-size: 1.875rem;
//   font-weight: 500;
//   margin-bottom: 0.25rem;
// `;

// export const Flex = styled.div`
//   display: flex;
//   margin-bottom: 1rem;
// `;

// export const StarIcon = styled.svg`
//   width: 1rem;
//   height: 1rem;
//   color: #667eea;
// `;

// export const ReviewText = styled.span`
//   color: #718096;
//   margin-left: 0.75rem;
// `;

// export const ReviewCount = styled.span`
//   padding-left: 0.75rem;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   border-left: 2px solid #edf2f7;
//   display: flex;
//   align-items: center;
// `;

// export const SocialLink = styled.a`
//   color: #718096;
//   margin-left: 0.5rem;
// `;

// export const ProductDescription = styled.p`
//   line-height: 1.5;
//   margin-bottom: 1.25rem;
// `;

// export const BorderBottom = styled.div`
//   display: flex;
//   align-items: center;
//   padding-bottom: 1.25rem;
//   border-bottom: 2px solid #f7fafc;
//   margin-bottom: 1.25rem;
// `;

// export const ColorPicker = styled.div`
//   display: flex;
//   margin-right: 1.5rem;
// `;

// export const ColorButton = styled.button`
//   width: 1.5rem;
//   height: 1.5rem;
//   border-radius: 9999px;
//   border: 2px solid #e2e8f0;
//   margin-left: 20px;
//   background-color: ${({ color }) => color || 'transparent'};
//   outline: none;
// `;

// export const SizePicker = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 1.5rem;
// `;

// export const SizeSelect = styled.select`
//   padding: 0.5rem 0.75rem;
//   border: 1px solid #e2e8f0;
//   border-radius: 0.25rem;
//   appearance: none;
//   outline: none;
//   font-size: 1rem;
// `;

// export const SelectIcon = styled.span`
//   position: absolute;
//   right: 0;
//   top: 0;
//   height: 100%;
//   width: 2.5rem;
//   text-align: center;
//   color: #718096;
//   pointer-events: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     width: 1rem;
//     height: 1rem;
//   }
// `;

// export const Price = styled.span`
//   font-size: 1.875rem;
//   font-weight: 500;
//   color: #1a202c;
// `;

// export const Button = styled.button`
//   margin-left: auto;
//   color: #fff;
//   background-color: #667eea;
//   padding: 0.5rem 1.5rem;
//   border: none;
//   border-radius: 0.25rem;
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     background-color: #5a67d8;
//   }
// `;

// export const FavoriteButton = styled.button`
//   width: 2.5rem;
//   height: 2.5rem;
//   background-color: #edf2f7;
//   border: none;
//   border-radius: 9999px;
//   margin-left: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #718096;
//   outline: none;

//   svg {
//     width: 1.25rem;
//     height: 1.25rem;
//   }
// `;
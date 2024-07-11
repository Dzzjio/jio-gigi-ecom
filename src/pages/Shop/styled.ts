import styled from "styled-components";

// export const StyledShopPage = styled.section`
//     width: 90vw;
//     margin: 0 auto;
//     display: flex;
//     gap: 50px;

// `

// export const StyledShopFilters = styled.div`
//     width: 30%;
//     height: 100%;
//     background-color: gray;
// `

// export const StyledShopMain = styled.div`
//     width: 70%;
//     height: 100%;
    
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px;

//     & > * {
//         // flex: 1;
//     }

// `

export const ShopContainer = styled.section`
  padding: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;

`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: center;
  width: 200px;
`;
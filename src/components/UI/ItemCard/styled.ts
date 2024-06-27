import styled from "styled-components";

export const StyledItemCard = styled.div`
    width: calc(33.33% - 20px); /* Adjust width based on desired gap (20px) */
    margin-bottom: 20px; /* Space between rows */
    position: relative;
  
    & > img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    & > button.add-to-cart {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        right: 0;
    }
`;
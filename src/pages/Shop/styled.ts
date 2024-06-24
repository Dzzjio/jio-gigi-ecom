import styled from "styled-components";

export const StyledShopPage = styled.section`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    gap: 50px;

`

export const StyledShopFilters = styled.div`
    width: 30%;
    height: 100%;
    background-color: gray;
`

export const StyledShopMain = styled.div`
    width: 70%;
    height: 100%;
    
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    & > * {
        // flex: 1;
    }

`
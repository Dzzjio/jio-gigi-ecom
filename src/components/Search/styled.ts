import styled from "styled-components";

export const StyledSearchContainer = styled.div`
    position: relative;
    flex: 1;
    margin: 0 auto;

    & > input {
    width: 100%;
    }
`;

export const ResultsContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 300px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 10;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const ResultItem = styled.div`
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    color: black;
    text-align: left;

    &:hover {
        background-color: #f9f9f9;
    }
`;

export const Loading = styled.div`
    padding: 10px;
    color: #888;
    text-align: center;
`;

export const Error = styled.div`
    padding: 10px;
    color: red;
    text-align: center;
`;

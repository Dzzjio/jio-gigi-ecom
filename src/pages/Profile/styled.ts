import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;

  .log-out-btn {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .log-out-icon {
    height: 20px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 24px;
  color: #4A90E2;
  font-size: 1.5em;
  border-bottom: 2px solid #4A90E2;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
`;

export const InfoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  font-size: 1em;
  color: #555;

  &:last-child {
    margin-bottom: 0;
  }

  & > span:first-child {
    font-weight: bold;
    color: #333;
  }

  & > span:last-child {
    color: #777;
  }
`;

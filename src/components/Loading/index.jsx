import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Loading = () => (
  <LoadingContainer>
    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
      <circle cx="50" cy="50" fill="none" stroke="currentColor" strokeWidth="4" r="20" strokeDasharray="94.24777960769379 33.41592653589793">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
      </circle>
    </svg>
  </LoadingContainer>
);

export default Loading;

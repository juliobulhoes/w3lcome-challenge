import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 50vh;
  margin: auto;

  align-items: center;
  justify-content: center;

  @keyframes leaves {
    0% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    max-width: 200px;
    animation: leaves 0.5s alternate infinite;
    margin: 44px auto;
  }
`;

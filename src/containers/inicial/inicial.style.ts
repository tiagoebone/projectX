import styled from "styled-components";

export const Spin = styled.div`
  background-color: #272732;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: spin-image-clockwise infinite 20s linear;
  }

  @keyframes spin-image-clockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

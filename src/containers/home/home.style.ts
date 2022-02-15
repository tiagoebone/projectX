import styled from "styled-components";

export const Spin = styled.div`
  background-color: #21222c;
  min-height: calc(100vh - 78px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 18px;
    color: #fff;
    margin-bottom: 48px;
  }

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

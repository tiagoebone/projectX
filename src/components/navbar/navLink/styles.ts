import styled from "styled-components";

export const NavLinkWrapper = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    transition: 200ms;
    font-size: 18px;
    color: #fff;
  }

  @media (hover: hover) {
    &:hover {
      span {
        color: #b0b2ff;
      }
    }
  }

  :after {
    content: "";
    transform-origin: left;
    transition: 150ms ease-in-out;
    transform: scaleX(${({ selected }) => (selected ? 1 : 0)});
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
`;

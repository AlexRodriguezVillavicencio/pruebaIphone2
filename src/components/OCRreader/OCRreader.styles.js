import styled from "styled-components";

export const ContainerVideo = styled.div`
  display: flex;
  width: 100vw;
  height: 120px;
  position: relative;
  justify-content: center;
  @media (min-width: 540px) {
    display: none;
  }
`;

export const Canvas = styled.canvas`
  border: 1px solid #000; 
  box-shadow: 0 0 10px 5px #424242;
  position: absolute;
`;

import styled, { keyframes } from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
`;
export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  /* background: linear-gradient(
    116.95deg,
    ${({ theme: { colors } }) => colors.primary} 0%,
    ${({ theme: { colors } }) => colors.tertiary} 48.03%,
    ${({ theme: { colors } }) => colors.secondary} 99.65%
  ); */
  opacity: 0.6;
`;

const AnimateBlobOne = keyframes`
  0%{
    transform:translate(-50%,-50%) rotateZ(0deg);
  }
  50%{
    transform:translate(60%,100%) rotateZ(360deg);
  }
  100%{
    transform:translate(-50%,-50%) rotateZ(0deg);
  }
`;

const AnimateBlobTwo = keyframes`
  0%{
    transform:translate(50%,50%) rotateZ(0deg);
  }
  50%{
    transform:translate(-60%,-100%) rotateZ(360deg);
  }
  100%{
    transform:translate(50%,50%) rotateZ(0deg);
  }
`;

export const BlobContainerOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  width: 30%;
  transform: translate(-50%, -50%);
  animation: ${AnimateBlobOne} 30s ease-in-out infinite;
  filter: blur(50px);
  opacity: 0.3;
  > svg {
    width: 100%;
    /* fill: ${({ theme: { colors } }) => colors.primary}; */
  }
`;
export const BlobContainerTwo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 30%;
  animation: ${AnimateBlobTwo} 30s ease-in-out infinite;
  filter: blur(50px);
  opacity: 0.3;
  > svg {
    width: 100%;
    /* fill: ${({ theme: { colors } }) => colors.secondary}; */
  }
`;

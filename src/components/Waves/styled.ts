import styled from "@emotion/styled";

const StyledWavesDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;

const StyledWavesPath = styled.path`
  fill: #edf2f7;
`;

const StyledWavesSVG = styled.svg`
  display: block;
  position: relative;
  height: 164px;
  width: calc(100% + 1.3px);
`;

export { StyledWavesDiv, StyledWavesPath, StyledWavesSVG };

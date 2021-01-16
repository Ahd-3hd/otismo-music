import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.white};
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

export const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

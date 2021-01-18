import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 8rem;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0px 0px 3px ${({ theme: { colors } }) => colors.greyTwo};
`;

export const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 250px;
  grid-gap: 2rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
`;

export const FormTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0px 0px 3px ${({ theme: { colors } }) => colors.greyTwo};
  text-align: center;
`;

export const Form = styled.form<{ err: boolean }>`
  background: ${({ theme: { colors } }) => colors.cardBackground};
  display: flex;
  height: 2.5rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    height: 4rem;
    width: 70%;
    max-width: 600px;
    align-self: center;
  }
  border: ${({ theme: { colors }, err }) =>
    err ? `2px solid ${colors.gradientThree}` : "none"};
`;

export const InputField = styled.input`
  background: transparent;
  border: none;
  flex: 1;
  height: 2rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.textSecondary};
  outline: none;
  ::placeholder {
    font-weight: 400;
    font-size: 0.9rem;
  }
`;
export const SubmitButton = styled.button`
  background: transparent;
  border: none;
  > svg {
    height: 1.4rem;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.gradientThree};
`;

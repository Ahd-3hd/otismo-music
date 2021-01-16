import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
`;

export const FormTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.white};
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Form = styled.form`
  background: ${({ theme: { colors } }) => colors.white};
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
`;

export const InputField = styled.input`
  background: transparent;
  border: none;
  flex: 1;
  height: 2rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primary};
  outline: none;
  ::placeholder {
    font-weight: 400;
  }
`;
export const SubmitButton = styled.button`
  background: transparent;
  border: none;
  > svg {
    height: 1.4rem;
  }
`;

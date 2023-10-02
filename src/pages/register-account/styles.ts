import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 4rem;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const RegisterForm = styled.div`
  width: 50vw;
  padding: 0 8%;
`;

export const RegisterFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6vh;

  strong {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    color: ${({theme}) => theme.color.gray_80};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4vh;

  & label {
    font-size: 0.9rem;
    font-weight: bold;
  }

  & input {
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    transition: 0.3s;
  }
`;

export const PasswordRecovery = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border: 0;
    color: ${({ theme }) => theme.color.brand_blue};
  }
`;

export const TermsContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.9rem;

  input {
    
  }

  span {
    color: ${({ theme }) => theme.color.brand_blue};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.color.purpleAxion};
    }
  }
`

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  margin: 3vh 0;
  border: 0;
  background-color: ${({ theme }) => theme.color.darkBlueAxion};
  color: white;
  font-weight: bold;
`;

export const ArtSection = styled.div`
  align-self: flex-start;
  background-image: url("/foto.png");
  min-height: 100vh;
  height: 100%;
  width: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;
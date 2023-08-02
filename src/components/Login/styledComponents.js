import styled from 'styled-components'

export const LoginOverallBgContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.overallBgColor};
`
export const LoginContainer = styled.div`
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  padding: 15px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.textColor};
  background-color: ${props => props.bgColorCard};
`
export const LoginLogoImage = styled.img`
  width: 40%;
  max-width: 150px;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginLabel = styled.label`
  font-size: 16px;
  padding-top: 10px;
  align-self: flex-start;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  margin-top: 5px;
  border: 1px solid #64748b;
`
export const ShowPasswordContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ShowPasswordCheckBox = styled.input`
  height: 24px;
  padding-right: 10px;
`
export const ShowPasswordText = styled.label`
  font-size: 14px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`

export const ErrorText = styled.p`
  font-size: 12px;
  color: #ff0000;
  align-self: flex-start;
`

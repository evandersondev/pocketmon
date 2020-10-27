import styled from 'styled-components/native'

export const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  border: 1px solid #bdc0c5;
  color: #bdc0c5;
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
`

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  color: #bdc0c5;
  padding: 0 15px 0 0px;
  border-radius: 8px;
  margin-bottom: 15px;
`

export const ImageContainer = styled.View`
  width: 56px;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const InputIcon = styled.Image`
  opacity: 0.4;
`

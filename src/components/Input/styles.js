import styled from 'styled-components/native'
import colors from '../../styles/colors'

const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  border: 1px solid #bdc0c5;
  color: #bdc0c5;
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
`

const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  color: ${colors.dark};
  padding: 0 15px 0 0px;
  border-radius: 8px;
  margin-bottom: 15px;
`

export default {
  InputContainer,
  Input,
}

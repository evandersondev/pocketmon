import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  padding: 0 40px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ type }) =>
    type === 'facebook' ? 'space-around' : 'center'};
  align-items: center;
  background-color: ${({ type }) =>
    type === 'facebook' ? colors.blue : colors.primary};
`
const TextButton = styled.Text`
  font-size: 18px;
  font-family: 'Nunito_700Bold';
  color: ${colors.ligth};
`

export const IconButton = styled.Image`
  height: 25px;
  margin-top: 2px;
`

export default {
  ButtonContainer,
  TextButton,
  IconButton,
}

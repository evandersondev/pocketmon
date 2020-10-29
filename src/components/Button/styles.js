import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`
const TextButton = styled.Text`
  font-size: 18px;
  font-family: 'Nunito_700Bold';
  color: ${colors.ligth};
`

export default {
  ButtonContainer,
  TextButton,
}

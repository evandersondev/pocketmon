import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-color: ${colors.primary};
  border-width: ${({ type }) => (type === 'outline' ? '1px' : '0px')};
  border-radius: 8px;
  padding: 0 40px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ icon }) =>
    icon === 'facebook' ? 'space-around' : 'center'};
  align-items: center;
  background-color: ${({ icon, type }) =>
    icon === 'facebook'
      ? colors.blue
      : type === 'outline'
      ? 'transparent'
      : colors.primary};
`
const TextButton = styled.Text`
  font-size: 18px;
  font-family: ${({ type }) =>
    type === 'outline' ? 'Nunito_400Regular' : 'Nunito_700Bold'};
  color: ${({ type }) => (type === 'outline' ? colors.primary : colors.ligth)};
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

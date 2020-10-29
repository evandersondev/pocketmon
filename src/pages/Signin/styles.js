import styled from 'styled-components/native'
import colors from '../../styles/colors'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.ligth};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`

const LogoImage = styled.Image`
  margin-bottom: 30px;
`

const Form = styled.View`
  width: 100%;
  margin-bottom: 25px;
`

const CreateAccountContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TextCreateAccount = styled.Text`
  color: ${colors.dark};
  font-size: 14px;
`

const ButtonCreateAccount = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`

export default {
  Container,
  LogoImage,
  Form,
  CreateAccountContainer,
  TextCreateAccount,
  ButtonCreateAccount,
}

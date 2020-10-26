import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.ligth};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`

export const TextMessage = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 25px;
  color: ${colors.dark};
`

export const Form = styled.View`
  width: 100%;
  margin-bottom: 25px;
`

export const CreateAccountContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TextCreateAccount = styled.Text`
  color: ${colors.dark};
  font-size: 14px;
`

export const ButtonCreateAccount = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`

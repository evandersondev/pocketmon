import styled from 'styled-components/native'
import colors from '../../styles/colors'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.ligth};
  align-items: center;
  justify-content: center;
  padding: 30px;
`

const LogoImage = styled.Image`
  margin-bottom: 30px;
  width: 250px;
  height: 250px;
`

const Form = styled.View`
  width: 100%;
  margin-bottom: 25px;
  margin-top: auto;
  align-items: center;
`

const VersionInfoContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`

const VersionInfoText = styled.Text`
  font-size: 11px;
  font-family: 'Nunito_400Regular';
  text-transform: uppercase;
  color: ${colors.graffiti};
`

export default {
  Container,
  LogoImage,
  Form,
  VersionInfoContainer,
  VersionInfoText,
}

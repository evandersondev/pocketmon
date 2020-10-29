import styled from 'styled-components/native'
import colors from '../../styles/colors'

const LandingContainer = styled.View`
  flex: 1;
  background: ${colors.ligth};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`

const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  font-family: 'Nunito_800ExtraBold';
  margin-bottom: 15px;
  line-height: 38px;
  color: ${colors.dark};
`

const Image = styled.Image`
  margin-bottom: 15px;
`

const SubTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: 'Nunito_700Bold';
  margin-bottom: 20px;
  color: ${colors.dark};
`

const Info = styled.Text`
  font-size: 18px;
  text-align: center;
  font-family: 'Nunito_400Regular';
  margin-bottom: 20px;
  color: ${colors.dark};
`

const ShowLanding = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-around;
  align-items: center;
`

const TextLanding = styled.Text`
  font-size: 14px;
  color: ${colors.dark};
`

const CheckButton = styled.TouchableOpacity`
  padding: 10px;
`

const Check = styled.Image``

export default {
  LandingContainer,
  Title,
  Image,
  SubTitle,
  Info,
  ShowLanding,
  TextLanding,
  CheckButton,
  Check,
}

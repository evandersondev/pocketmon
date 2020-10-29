import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ProfileContainer = styled.View`
  padding: 0 30px;
  flex: 1;
  background: ${colors.ligth};
`

const TitleSession = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 32px;
  margin-bottom: 20px;
  color: ${colors.dark};
`

const ImageProfile = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 0 auto;
`

const BodyContainer = styled.View`
  margin-top: 20px;
`

const InfoContainer = styled.View`
  height: 66px;
`

const LabelInfoText = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 18px;
  color: ${colors.dark};
`

const ValueInfoText = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 18px;
  color: ${colors.dark};
`

const ShowLandingContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 20px;
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
  ProfileContainer,
  TitleSession,
  ImageProfile,
  BodyContainer,
  InfoContainer,
  LabelInfoText,
  ValueInfoText,
  ShowLandingContainer,
  TextLanding,
  CheckButton,
  Check,
}

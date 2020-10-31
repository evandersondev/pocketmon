import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ProfileContainer = styled.View`
  padding: 0 30px;
  flex: 1;
  background: ${colors.ligth};
`

const TitleSession = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 26px;
  margin-bottom: 20px;
  color: ${colors.dark};
`

const ImageProfile = styled.Image`
  width: 200px;
  height: 200px;
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
  text-transform: capitalize;
`

const ValueInfoText = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 18px;
  color: ${colors.dark};
`

const AddInfoButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 8px 30px;
  background: ${colors.gray};
`

const TextAddInfo = styled.Text`
  font-size: 16px;
  color: ${colors.dark};
  font-family: 'Nunito_700Bold';
`

const ShowLandingContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`

const TextLanding = styled.Text`
  font-size: 13px;
  color: ${colors.dark};
  text-transform: uppercase;
  margin-right: 15px;
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
  AddInfoButton,
  TextAddInfo,
}

import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const LandingContainer = styled.View`
  flex: 1;
  background: ${colors.ligth};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`

export const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  font-family: 'Nunito_800ExtraBold';
  margin-bottom: 15px;
  line-height: 38px;
  color: ${colors.dark};
`

export const Image = styled.Image`
  margin-bottom: 15px;
`

export const SubTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: 'Nunito_700Bold';
  margin-bottom: 20px;
  color: ${colors.dark};
`

export const Info = styled.Text`
  font-size: 18px;
  text-align: center;
  font-family: 'Nunito_400Regular';
  margin-bottom: 20px;
  color: ${colors.dark};
`

export const ShowLanding = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-around;
  align-items: center;
`

export const TextLanding = styled.Text`
  font-size: 14px;
  color: ${colors.dark};
`

export const CheckButton = styled.TouchableOpacity`
  padding: 10px;
`

export const Check = styled.Image``

import styled from 'styled-components/native'
import colors from '../../styles/colors'

const ShowContainer = styled.ScrollView`
  flex: 1;
  padding: 0 30px 30px 30px;
  background: ${({ typeColor }) =>
    typeColor ? colors.type.colors[typeColor] : colors.ligth};
`

const HeaderShow = styled.View`
  height: 86px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BackContainer = styled.TouchableOpacity`
  height: 100%;
`

const BackImage = styled.Image`
  margin: auto 0;
  height: 18px;
`

const MarkContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const MarkText = styled.Text`
  font-size: 14px;
  font-family: 'Nunito_700Bold';
  color: ${colors.dark};
`

const MarkImageContainer = styled.View`
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: flex-end;
  margin-left: 8px;
`

const MarkImage = styled.Image`
  height: 22px;
  width: 22px;
`

const ImageContainer = styled.View`
  height: 400px;
  margin-top: 130px;
  justify-content: flex-end;
  align-items: center;
`

const BackgroundContainer = styled.View`
  background: ${colors.card}88;
  margin-top: auto;
  position: relative;
  width: 100%;
  padding: 120px 15px 30px;
  border-radius: 8px;
`

const PokemonImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: -230px auto 30px;
  z-index: 99;
`

const IdContainer = styled.View`
  width: 120px;
  height: 36px;
  align-items: center;
  justify-content: center;
  background: ${colors.graffiti}88;
  margin: auto;
  border-radius: 18px;
`

const TextId = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 17px;
  color: ${colors.dark};
`

const PokemonName = styled.Text`
  text-align: center;
  font-family: 'Nunito_800ExtraBold';
  font-size: 38px;
  color: ${colors.dark};
  margin-top: 15px;
  text-transform: capitalize;
`

const TypeContainer = styled.View`
  width: 120px;
  height: 50px;
  flex-direction: row;
  margin: auto;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
`

const TypeImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-top: 5px;
`
const TypeText = styled.Text`
  color: ${colors.dark};
  font-size: 20px;
  font-family: 'Nunito_400Regular';
  letter-spacing: 0.7px;
`

const MeasuresContainer = styled.View`
  width: 100%;
  height: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`

const MeasuresText = styled.Text`
  font-size: 18px;
  font-family: 'Nunito_400Regular';
`

const StatsContainer = styled.View`
  padding: 30px 0;
`

const TitleSession = styled.Text`
  font-size: 26px;
  font-family: 'Nunito_800ExtraBold';
  margin-bottom: 15px;
`

const AbilitiesContainer = styled.View`
  padding-bottom: 60px;
`

const AbilitiesItemText = styled.Text`
  font-size: 18px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 5px;
  text-transform: capitalize;
`

export default {
  ShowContainer,
  HeaderShow,
  BackContainer,
  BackImage,
  MarkContainer,
  MarkText,
  MarkImageContainer,
  MarkImage,
  ImageContainer,
  BackgroundContainer,
  PokemonImage,
  IdContainer,
  TextId,
  PokemonName,
  TypeContainer,
  TypeImage,
  TypeText,
  MeasuresContainer,
  MeasuresText,
  StatsContainer,
  TitleSession,
  AbilitiesContainer,
  AbilitiesItemText,
}

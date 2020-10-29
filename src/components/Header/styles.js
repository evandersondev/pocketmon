import styled from 'styled-components/native'

const HeaderContainer = styled.View`
  width: 100%;
  height: 66px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 15px;
`
const Logo = styled.Image``

const Logout = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`

const LogoutImage = styled.Image``

export default {
  HeaderContainer,
  Logo,
  Logout,
  Logout,
  LogoutImage,
}

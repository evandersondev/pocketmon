import styled from 'styled-components/native'

import colors from '../../styles/colors'

const NotesContainer = styled.View`
  height: 76%;
  margin-top: auto;
  background: ${colors.ligth};
  border-radius: 50px;
  padding: 0 30px;
  elevation: 2;
`

const ScrollContainer = styled.ScrollView``

const NotesHeader = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const CloseNotesButton = styled.TouchableOpacity`
  padding: 15px;
`

const NotesBody = styled.View`
  flex: 1;
`

const NotesTitle = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 24px;
  color: ${colors.dark};
  margin-bottom: 15px;
`

const NotesItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;
`

const NotesItemContainerColumn = styled.View`
  width: 50%;
  height: 130px;
  justify-content: space-between;
`

const NotesItemButton = styled.TouchableOpacity`
  width: 90%;
  margin: 0 auto;
  padding: 15px 8px;
  border: 1px solid ${({ enable }) => (enable ? colors.primary : colors.dark)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

const NotesItemValue = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 16px;
  color: ${({ enable }) => (enable ? colors.primary : colors.dark)};
`

export default {
  NotesContainer,
  NotesHeader,
  CloseNotesButton,
  NotesBody,
  NotesTitle,
  NotesItemContainer,
  NotesItemContainerColumn,
  NotesItemButton,
  NotesItemValue,
  ScrollContainer,
}

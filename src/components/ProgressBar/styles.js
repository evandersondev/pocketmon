import styled from 'styled-components/native'

import colors from '../../styles/colors'

const ProgressContainer = styled.View`
  width: 100%;
  height: 60px;
`

const ProgressText = styled.Text`
  margin-bottom: 8px;
  font-family: 'Nunito_700Bold';
  font-size: 16px;
  color: ${colors.dark};
`

export default {
  ProgressContainer,
  ProgressText,
}

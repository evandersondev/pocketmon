import React from 'react'
import Progress from 'react-native-progress/Bar'

import { ProgressContainer, ProgressText } from './styles'

export default ({ title, value = 0 }) => (
  <ProgressContainer>
    <ProgressText>{title}</ProgressText>
    <Progress
      progress={value / 100}
      borderRadius={0}
      width={null}
      color="rgba(219, 13, 45, 1)"
      height={8}
    />
  </ProgressContainer>
)

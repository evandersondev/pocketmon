import React from 'react'
import Progress from 'react-native-progress/Bar'

import styles from './styles'

export default ({ title, value = 0 }) => (
  <styles.ProgressContainer>
    <styles.ProgressText>{title}</styles.ProgressText>
    <Progress
      progress={value / 100 ?? 0}
      borderRadius={0}
      width={null}
      color="#ff6348"
      height={8}
      borderWidth={0}
      unfilledColor="#dfe4ea"
    />
  </styles.ProgressContainer>
)

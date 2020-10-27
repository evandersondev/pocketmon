import React, { useState, useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { heightInCm, weightInKg } from '../../utils/convertMeasures'
import iconTypes from '../../utils/typeIcon'

import { ProgressBar } from '../../components'

import BackIcon from '../../assets/images/icons/arrow.png'
import MarkIcon from '../../assets/images/icons/check.png'

import {
  ShowContainer,
  HeaderShow,
  BackContainer,
  BackImage,
  MarkContainer,
  MarkText,
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
} from './styles'

export default () => {
  const { params } = useRoute()
  const { goBack } = useNavigation()
  const [pokemon, setPokemon] = useState({
    abilities: [],
  })

  useEffect(() => {
    setPokemon(params)
  }, [])

  return (
    <ShowContainer
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
      typeColor={pokemon.type}
    >
      <HeaderShow>
        <BackContainer onPress={goBack}>
          <BackImage resizeMode="contain" source={BackIcon} />
        </BackContainer>

        <MarkContainer>
          <MarkText>Mark as</MarkText>
          <MarkImage resizeMode="contain" source={MarkIcon} />
        </MarkContainer>
      </HeaderShow>

      <ImageContainer>
        <BackgroundContainer style={{ elevation: 1 }}>
          <PokemonImage source={{ uri: params.image }} />

          <IdContainer>
            <TextId>#{pokemon.id}</TextId>
          </IdContainer>

          <PokemonName>{pokemon.name}</PokemonName>

          <TypeContainer>
            <TypeImage resizeMode="contain" source={iconTypes[pokemon.type]} />
            <TypeText>{pokemon.type}</TypeText>
          </TypeContainer>

          <MeasuresContainer>
            <MeasuresText>Weight: {weightInKg(pokemon.weight)}kg</MeasuresText>
            <MeasuresText>Height: {heightInCm(pokemon.height)}cm</MeasuresText>
          </MeasuresContainer>
        </BackgroundContainer>
      </ImageContainer>

      <StatsContainer>
        <TitleSession>Stats</TitleSession>
        <ProgressBar title="Hp" value={pokemon?.stats?.hp} />
        <ProgressBar title="Attack" value={pokemon?.stats?.attack} />
        <ProgressBar title="Defense" value={pokemon?.stats?.defense} />
        <ProgressBar
          title="Special Attack"
          value={pokemon?.stats?.specialAttack}
        />
        <ProgressBar
          title="Special defense"
          value={pokemon?.stats?.specialDefense}
        />
        <ProgressBar title="Speed" value={pokemon?.stats?.speed} />
      </StatsContainer>

      <AbilitiesContainer>
        <TitleSession>Abilities</TitleSession>
        {pokemon?.abilities.map(({ ability }, index) => (
          <AbilitiesItemText key={ability.name}>
            {index + 1} - {ability.name}
          </AbilitiesItemText>
        ))}
      </AbilitiesContainer>
    </ShowContainer>
  )
}

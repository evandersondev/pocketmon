import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { usePokemon } from '../../context/Pokemon'
import { heightInCm, weightInKg } from '../../utils/convertMeasures'
import { useModal } from '../../context/Modal'
import { ProgressBar, Modal } from '../../components'
import { images } from '../../assets'
import styles from './styles'

export default () => {
  const { goBack } = useNavigation()
  const { showModal } = useModal()
  const { pokemon, markedAs } = usePokemon()

  return (
    <>
      <Modal id={pokemon.id} name={pokemon.name} image={pokemon.image} />

      {pokemon && (
        <styles.ShowContainer
          style={{
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}
          typeColor={pokemon.type}
        >
          <styles.HeaderShow>
            <styles.BackContainer onPress={goBack}>
              <styles.BackImage resizeMode="contain" source={images.arrow} />
            </styles.BackContainer>

            <styles.MarkContainer onPress={showModal}>
              <styles.MarkText>Mark as</styles.MarkText>
              <styles.MarkImageContainer>
                <styles.MarkImage
                  resizeMode="contain"
                  source={images[markedAs]}
                />
              </styles.MarkImageContainer>
            </styles.MarkContainer>
          </styles.HeaderShow>

          <styles.ImageContainer>
            <styles.BackgroundContainer style={{ elevation: 1 }}>
              <styles.PokemonImage source={{ uri: pokemon.image }} />

              <styles.IdContainer>
                <styles.TextId>#{pokemon.id}</styles.TextId>
              </styles.IdContainer>

              <styles.PokemonName>{pokemon.name}</styles.PokemonName>

              <styles.TypeContainer>
                <styles.TypeImage
                  resizeMode="contain"
                  source={images[pokemon.type]}
                />
                <styles.TypeText>{pokemon.type}</styles.TypeText>
              </styles.TypeContainer>

              <styles.MeasuresContainer>
                <styles.MeasuresText>
                  Weight: {weightInKg(pokemon.weight)}kg
                </styles.MeasuresText>
                <styles.MeasuresText>
                  Height: {heightInCm(pokemon.height)}cm
                </styles.MeasuresText>
              </styles.MeasuresContainer>
            </styles.BackgroundContainer>
          </styles.ImageContainer>

          <styles.StatsContainer>
            <styles.TitleSession>Stats</styles.TitleSession>
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
          </styles.StatsContainer>

          <styles.AbilitiesContainer>
            <styles.TitleSession>Abilities</styles.TitleSession>
            {pokemon?.abilities?.map(({ ability }, index) => (
              <styles.AbilitiesItemText key={ability.name}>
                {index + 1} - {ability.name}
              </styles.AbilitiesItemText>
            ))}
          </styles.AbilitiesContainer>
        </styles.ShowContainer>
      )}
    </>
  )
}

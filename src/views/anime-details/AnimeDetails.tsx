import React from 'react'
import { useParams } from 'react-router-dom'
import { Anime } from '../../domain/entities/Anime'

interface StateProps {
  anime?: Anime
}

interface DispatchProps {
  loadAnime (animeId: number): void
}

type Props = StateProps & DispatchProps

const AnimeDetails: React.FC<Props> = props => {
  const { animeId } = useParams()
  const animeIdInt = animeId ? parseInt(animeId) : undefined

  React.useEffect(() => {
    if (animeIdInt) {
      props.loadAnime(animeIdInt) 
    }
  })

  return (
    <div>
      <h1>Anime { props.anime?.title.romaji } Details</h1>
    </div>
  )
}

export default AnimeDetails

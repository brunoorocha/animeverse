import React from 'react'
import { useParams } from 'react-router-dom'

const AnimeDetails: React.FC = props => {
  const { animeId } = useParams()

  return (
    <div>
      <h1>Anime { animeId } Details</h1>
    </div>
  )
}

export default AnimeDetails

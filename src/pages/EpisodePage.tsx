import useRickAndMortyApi from '@/hooks/useRickAndMortyApi'
import { Card, CardContent, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
export default function EpisodesPage() {
  const location = useLocation()

  const { resultData: episode } = useRickAndMortyApi<IEpisode>(location.pathname)

  return (
    <div>
      {episode && (
        <Card key={episode.id} sx={{ width: 345 }}>
          <CardContent style={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" component="div">
              {episode.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Эпизод: {episode.episode}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Создан: {new Date(episode.created).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Дата выхода в эфир: {episode.air_date}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

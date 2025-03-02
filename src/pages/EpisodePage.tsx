import category from '@/data/category'
import { Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
export default function EpisodesPage() {
  const params = useParams()

  const episode: IEpisode | undefined = category.episodes.find((item) => item.id === Number(params.id))

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

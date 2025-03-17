import useRickAndMortyApi from '@/hooks/useRickAndMortyApi'
import { Card, CardContent, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
export default function LocationsPage() {
  const location = useLocation()

  const { resultData: locationCard } = useRickAndMortyApi<ILocation>(location.pathname)

  return (
    <div>
      {locationCard && (
        <Card key={locationCard.id} sx={{ width: 345 }}>
          <CardContent style={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" component="div">
              {locationCard.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Измерение: {locationCard.dimension}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Тип: {locationCard.type}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Создан: {new Date(locationCard.created).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

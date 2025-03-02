import category from '@/data/category'
import { Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
export default function LocationsPage() {
  const params = useParams()

  const location: ILocation | undefined = category.locations.find(
    (item) => item.id === Number(params.id)
  )
  return (
    <div>
      {location && (
        <Card key={location.id} sx={{ width: 345 }}>
          <CardContent style={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" component="div">
              {location.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Измерение: {location.dimension}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Тип: {location.type}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Создан: {new Date(location.created).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

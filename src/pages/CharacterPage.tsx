import useRickAndMortyApi from '@/hooks/useRickAndMortyApi'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

export default function CharactersPage() {
  const location = useLocation()

  const { resultData: character } = useRickAndMortyApi<ICharacter>(location.pathname)

  return (
    <div>
      {character && (
        <Card key={character.id} sx={{ width: 345 }}>
          <CardMedia sx={{ height: 300 }} image={character.image} title={character.name} />
          <CardContent style={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Создан: {new Date(character.created).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Пол: {character.gender}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Вид: {character.species}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Статус: {character.status}
              {character.type}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

import category from '@/data/category'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function CharactersPage() {
  const params = useParams()

  const character: ICharacter | undefined = category.characters.find((item) => item.id === Number(params.id))

  return (
    <div>
      {character && <Card key={character.id} sx={{ width: 345 }}>
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
      </Card>}
    </div>
  )
}

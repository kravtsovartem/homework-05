import category from '@/data/category'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

import { useCallback } from 'react'

export default function CategoryPage() {
  const location = useLocation()

  const [searchParams, setSearchParams] = useSearchParams()

  const typeCategory: string = location.pathname.slice(1)

  const sortedListCategory = useCallback(() => {
    return category[typeCategory].sort((a, b) => {
      if (searchParams.get('sort') === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })
  }, [searchParams, typeCategory])

  const handleClickSort = () => {
    const sort = searchParams.get('sort') === 'asc' ? 'desc' : 'asc'
    setSearchParams({ sort })
  }

  return (
    <div>
      <Button onClick={handleClickSort}>Sort</Button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {sortedListCategory().map((item) => (
          <Card key={item.id} sx={{ maxWidth: 245 }}>
            <CardContent>
              <Typography sx={{ height: 30 }} gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/${typeCategory}/${item.id}`}>
                <Button size="small">Подробнее</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

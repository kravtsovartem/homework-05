import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

import { useCallback, useEffect, useRef, useState } from 'react'
import useRickAndMortyApi from '@/hooks/useRickAndMortyApi'

export default function CategoryPage() {
  const location = useLocation()
  const pathApi: string = location.pathname

  console.log(location.pathname)
  const [page, setPage] = useState(1)

  const { loading, resultData, hasMore } = useRickAndMortyApi<ICategory[]>(pathApi, page)

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setPage(1)
  }, [pathApi])

  const observer = useRef<IntersectionObserver>(null)
  const lastNodeRef = useCallback(
    (node: HTMLElement) => {
      if (loading) return

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) setPage((prevState) => prevState + 1)
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore]
  )

  const sortedListCategory = useCallback(() => {
		if(!searchParams.has('sort'))
			return resultData

    return resultData?.sort((a, b) => {
      if (searchParams.get('sort') === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })
  }, [searchParams, resultData])

  const handleClickSort = () => {
    const sort = searchParams.get('sort') === 'asc' ? 'desc' : 'asc'
    setSearchParams({ sort })
    setPage(1)
  }

  return (
    <div>
      <Button onClick={handleClickSort}>Sort</Button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {sortedListCategory()?.map((item, index, array) => (
          <Card key={item.id} sx={{ maxWidth: 245 }}>
            <CardContent>
              <Typography
								ref={array.length - 5 === index + 1 ? lastNodeRef : null}
                sx={{ height: 30 }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/${pathApi}/${item.id}`}>
                <Button size="small">Подробнее</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

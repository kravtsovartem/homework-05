import CategoryPage from '@/pages/CategoryPage'
import CharacterPage from '@/pages/CharacterPage'
import LocationPage from '@/pages/LocationPage'
import EpisodePage from '@/pages/EpisodePage'
import IndexPage from '@/pages/IndexPage'

const routes = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/characters',
    element: <CategoryPage />,
  },
  {
    path: '/locations',
    element: <CategoryPage />,
  },
  {
    path: '/episodes',
    element: <CategoryPage />,
  },
  {
    path: '/characters/:id',
    element: <CharacterPage />,
  },
  {
    path: '/locations/:id',
    element: <LocationPage />,
  },
  {
    path: '/episodes/:id',
    element: <EpisodePage />,
  },
  {
    path: '*',
    element: <IndexPage />,
  },
]

export default routes

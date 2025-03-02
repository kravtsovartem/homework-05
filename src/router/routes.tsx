import CharactersPage from '@/pages/CharactersPage'
import DetailPage from '@/pages/DetailPage'
import EpisodesPage from '@/pages/EpisodesPage'
import IndexPage from '@/pages/IndexPage'
import LocationsPage from '@/pages/LocationsPage'

const routes = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/characters',
    element: <CharactersPage />,
  },
  {
    path: '/locations',
    element: <LocationsPage />,
  },
  {
    path: '/episodes',
    element: <EpisodesPage />,
  },
  {
    path: '/detail/:id',
    element: <DetailPage />,
  },
  {
    path: '*',
    element: <IndexPage />,
  },
]

export default routes

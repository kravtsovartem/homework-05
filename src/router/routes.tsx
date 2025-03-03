import CategoryPage from '@/pages/CategoryPage'
import CharacterPage from '@/pages/CharacterPage'
import LocationPage from '@/pages/LocationPage'
import EpisodePage from '@/pages/EpisodePage'
import IndexPage from '@/pages/IndexPage'
import LoginPage from '@/pages/LoginPage'
import MainLayout from '@/layouts/MainLayout'

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
				index: true,
        element: <IndexPage />
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
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <IndexPage />,
  },
]

export default routes

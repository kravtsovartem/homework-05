import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

interface IPrivateRouteProps {
  element: React.ReactNode
}

export default function PrivateRoute({ element }: IPrivateRouteProps) {
  const context = useAuth()

  if (!context.signIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return element
}

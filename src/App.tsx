import AuthProvider from '@/contexts/AuthProvider'
import ViewRouter from '@/router'

export default function App() {
  return (
    <div>
      <AuthProvider>
        <ViewRouter />
      </AuthProvider>
    </div>
  )
}

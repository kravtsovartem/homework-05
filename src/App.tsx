import MainLayout from '@/layouts/MainLayout'

/**
 * The App component serves as the main entry point of the application.
 * It renders a navigation menu with links to different sections: characters,
 * locations, and episodes. It also incorporates the ViewRouter component
 * to handle rendering of other components based on the route.
 */

export default function App() {
  return (
    <div>
      <MainLayout />
    </div>
  )
}

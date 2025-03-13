import ErrorBoundary from '@/hoc/ErrorBoundary'
import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const menu: IMenu[] = [
  {
    name: 'Герои',
    link: '/characters',
  },
  {
    name: 'Локации',
    link: '/locations',
  },
  {
    name: 'Эпизоды',
    link: '/episodes',
  },
]

const theme = createTheme({
  palette: {
    primary: {
      main: '#97ce4c',
    },
    secondary: {
      main: '#f0e14a',
    },
  },
})

const drawerWidth = 150
export default function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            >
              Рик и Морти
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {menu.map((item) => (
                <NavLink key={item.name} to={item.link}>
                  <ListItemButton selected={item.link === location.pathname}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </NavLink>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { DeckPage, DecksPage, SignInPage } from '@/pages'
import { Layout } from '@/components'

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        path: '/login',
        element: <SignInPage />,
      },
    ],
    element: <Outlet />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DecksPage />,
  },
  {
    path: '/decks/:deckId',
    element: <DeckPage />,
  },
]

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes({}) {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

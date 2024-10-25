// src/router.tsx

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import {
  DeckPage,
  DecksPage,
  ForgotPasswordPage,
  LogInPage,
  ProfilePage,
  SignUpPage,
} from '@/pages'
import { Layout } from '@/components'
import { useAppSelector } from '@/services/store'

const publicRoutes: RouteObject[] = [
  {
    element: <Outlet />,
    children: [
      {
        path: '/logIn',
        element: <LogInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/forgotpass',
        element: <ForgotPasswordPage />,
      },
    ],
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
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      // ...publicRoutes,
      {
        element: <PublicRoutes />,
        children: publicRoutes,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuth = useAppSelector(state => state.auth.isAuth)

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

function PublicRoutes() {
  const isAuth = useAppSelector(state => state.auth.isAuth)

  return isAuth ? <Navigate to="/" /> : <Outlet />
}

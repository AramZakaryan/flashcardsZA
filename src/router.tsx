// src/router.tsx

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  useOutletContext,
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

const publicRoutes: RouteObject[] = [
  {
    path: '/logIn',
    element: <LogInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
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
    path: '/forgotpassword',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
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
  const isAuth = useOutletContext()
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

function PublicRoutes() {
  // todo: this creates infinite loop, should be corrected
  // const isAuth = useOutletContext()
  // return isAuth ? <Navigate to="/" /> : <Outlet />
  return <Outlet />
}

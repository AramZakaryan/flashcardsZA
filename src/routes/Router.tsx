// src/Router.tsx

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
import { ROUTES } from '@/routes/routes'

const publicRoutes: RouteObject[] = [
  {
    path: ROUTES.LOG_IN,
    element: <LogInPage />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <DecksPage />,
  },
  {
    path: `${ROUTES.DECKS}/:deckId`,
    element: <DeckPage />,
  },
  {
    path: ROUTES.PROFILE,
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
      ...publicRoutes,
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuth = useOutletContext()

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOG_IN} />
}

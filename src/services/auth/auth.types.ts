export type MeResponse = User

export type User = {
  avatar: string | null
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type LogInArgs = {
  password: string
  email: string
  rememberMe?: boolean
}

export type LogInResponse = {
  accessToken: string
  refreshToken: string
}

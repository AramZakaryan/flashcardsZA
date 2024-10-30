import { any, z } from 'zod'

export const nicknameSchema = z.string().min(3)

export const emailSchema = z.string().email()

export const passwordSchema = z.string().min(3)

export const confirmPasswordSchema = z.string().min(1)

export const rememberMeSchema = z.boolean().default(false)

export const createDeckSchema = z.object({
  cover: any(), // todo: to be change to fit to FormData
  isPrivate: z.boolean(),
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(30, 'Name cannot exceed 30 characters')
    .describe('User name, between 3 and 30 characters'),
})

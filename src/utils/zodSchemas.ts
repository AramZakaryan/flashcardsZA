import { z } from 'zod'

export const emailSchema = z.string().email()

export const passwordSchema = z.string().min(3)

export const confirmPasswordSchema = z.string().min(1)

export const rememberMeSchema = z.boolean().default(false)

import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('Informe um e-mail valido.'),
  password: z
    .string()
    .min(6, 'A senha precisa ter no minimo 6 caracteres.'),
})

export type LoginFormData = z.infer<typeof loginSchema>

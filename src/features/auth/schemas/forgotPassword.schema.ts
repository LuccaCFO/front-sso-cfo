import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Informe um e-mail valido."),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

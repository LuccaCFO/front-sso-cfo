import type { LoginPayload, LoginResponse } from '../types/auth.types'

const FAKE_REQUEST_DELAY_IN_MS = 900

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  await new Promise((resolve) => {
    setTimeout(resolve, FAKE_REQUEST_DELAY_IN_MS)
  })

  return {
    token: `fake-token-${payload.email}`,
    userName: payload.email.split('@')[0] ?? 'usuario',
  }
}

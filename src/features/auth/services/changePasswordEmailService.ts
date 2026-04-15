import type { forgotPasswordEmailPayload, forgotPasswordEmailResponse } from '../types/forgotPasswordEmail.types'

const FAKE_REQUEST_DELAY_IN_MS = 900

export async function changePasswordEmailService(payload: forgotPasswordEmailPayload): Promise<forgotPasswordEmailResponse> {
  await new Promise((resolve) => {
    setTimeout(resolve, FAKE_REQUEST_DELAY_IN_MS)
  })

  return {
    token: `fake-token-${payload.email}`,
    newPassword: "123456",
  }
}

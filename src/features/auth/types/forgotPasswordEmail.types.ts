export type forgotPasswordEmailPayload = {
    email: string
  }
  
  export type forgotPasswordEmailResponse = {
    token: string
    newPassword: string
  }
  
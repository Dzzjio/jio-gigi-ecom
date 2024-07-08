import api from "../utils/api";

export const authServices = {
  login: (email: string, password: string) => (api.post('auth/login', {email, password})),
  register: ( body: {
    firstName: string
    lastName: string  
    email: string
    password: string 
    phoneNumber: string
  }) => api.post('auth/register', {params: body}),
  refreshTokens: (refteshToken: string) => (api.post('auth/update-token', {refteshToken}))
}

export default authServices
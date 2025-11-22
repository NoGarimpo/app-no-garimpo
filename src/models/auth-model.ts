export interface Register {
  nome: string
  email: string
  senha: string
}

export interface Login {
  email: string
  senha: string
}

export interface LoginResponse {
  message: string
  token: string
  user: {
    id: number
    nome: string
    email: string
    cargo: string
  }
}
